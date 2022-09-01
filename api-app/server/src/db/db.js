const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://vinicin:${process.env.PASSWORD}@api-clister.d9kc9xi.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error);
});
db.once("open", () => console.log("Connected to the database"));

module.exports = mongoose;
