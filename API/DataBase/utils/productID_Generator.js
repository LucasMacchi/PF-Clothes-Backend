const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const product_id_generator = () => {
  const number = Math.floor(Math.random() * 10000);
  const letterID = letters.charAt(
    Math.floor(Math.random() * letters.length - 1)
  );
  console.log("letra = ", letterID);
  return letterID + number;
};

module.exports = {
  product_id_generator,
};
