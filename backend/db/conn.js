//  For connecting DB with node js
const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://gayathri:gay3@cluster0.ariavk6.mongodb.net/", {})
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });
