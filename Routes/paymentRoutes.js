const { Router } = require("express");
const router = Router();
const { payment } = require("./Controllers/payment");
const passport = require("passport");
const { marketedProduct, profile } = require("../DataBase/db");
const mercadopago = require("mercadopago");
const nodemailer = require("nodemailer");

router.get("/", passport.authenticate("jwt", { session: false }), payment);

router.post("/notificar/:id", async (req, res) => {
  const { id } = req.params;
  const query = req.query;
  const topic = query.topic;
  const user = await profile.findByPk(id);

  const allProducts = await marketedProduct.findAll({
    where: {
      profileId: id,
      pagado: false,
    },
  });
  const data = await allProducts;

  let a = [];
  switch (topic) {
    case "payment":
      const paymentId = query.id;
      const payment = await mercadopago.payment.findById(paymentId);
      console.log(payment.body.additional_info.items);
      for (let i = 0; i < payment.body.additional_info.items.length; i++) {
        if (payment.body.status === "approved") {
          a.push(payment.body.additional_info.items[i].id);
        }
      }
      break;
    default:
      break;
  }
  console.log(a);

  for (const productSold of data) {
    if (a.includes(productSold.productoId)) {
      const comprados = await marketedProduct.update(
        {
          status: productSold.status,
          price: productSold.price,
          name: productSold.name,
          size: productSold.size,
          color: productSold.color,
          demographic: productSold.demographic,
          productoId: productSold.productoId,
          sellerId: productSold.sellerId,
          pagado: true,
        },
        { where: { id: productSold.id } }
      );

      const vendedor = await profile.findOne({
        where: {
          id: productSold.sellerId,
        },
      });

      console.log(vendedor.mail);

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL,
        to: vendedor.mail,
        subject: "Express Clothes",
        text: `Estimado vendedor de "Express Clothes", usted ha realizado una venta de sus productos al usuario ${user.mail}. Por favor pongase en contacto con el mismo para coordinar el envio.

    Muchas gracias.`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          res.send("Email NO enviado");
        } else {
          res.send("Email enviado");
        }
      });
    } else continue;
  }

  return "Comprado";
});

module.exports = router;
