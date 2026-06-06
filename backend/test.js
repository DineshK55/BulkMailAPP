const mongoose = require("mongoose");

mongoose
  .connect(
    "PASTE_YOUR_FULL_CONNECTION_STRING_HERE"
  )
  .then(() => {
    console.log("MongoDB Connected Successfully");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });