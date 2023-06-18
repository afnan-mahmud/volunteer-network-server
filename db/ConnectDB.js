const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const dbUrl = `mongodb+srv://afnanmahmudafif:${process.env.DB_PASSWORD}@volunteer-info.naseyvl.mongodb.net/${process.env.DB_VOLUNTER}?retryWrites=true&w=majority`;

async function connectDB() {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDB;
