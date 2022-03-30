const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/userblog")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err.message));
