const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const product_id_generator = (order) => {

  const number = Math.floor(Math.random() * 10000);
  const letterID = letters.charAt(
    Math.floor(Math.random() * letters.length - 1)
  );
  console.log("letra = ", letterID);
  if(order === "p") return letterID + number + "P";
  else return letterID + number + "U";
  
};

module.exports = {
  product_id_generator,
};
