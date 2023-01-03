const { default: mongoose } = require("mongoose");

async function connectDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/nodejs_intro");
}

module.exports = connectDB;

// const { MongoClient } = require("mongodb");

// // connwction URL
// const url = "mongodb://127.0.0.1:27017";
// const client = new MongoClient(url);

// // Database Name
// const dbName = "nodejs_intro";

// async function connect() {
//   await client.connect();
//   const db = await client.db(dbName);
//   return db;
// }

// module.exports = connect;
