const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("server is connected to DB");
    })
    .catch((err) => {
      console.error("Failed to connect to DB", err);
      process.exit(1);
    });
}

module.exports = connectDB;
