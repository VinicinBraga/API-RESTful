const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/adc-api", {
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Mongo connected");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = mongoose;
