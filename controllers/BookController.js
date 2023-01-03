const { ObjectId } = require("mongodb");
const connect = require("../database/db");

exports.index = async (req, res) => {
  const db = await connect;
  const books = await db.collection("books").find().toArray();
  res.json(books);
};

exports.store = async (req, res) => {
  const db = await connect();
  await db.collection("book").insertOne(req.body);
  res.status(201).json({ data: "Book is stored" });
};

exports.show = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const db = await connect();
  const book = await db.collection("book").find({ _id }).toArray();
  res.json(book);
  // res.send(`single book ID: ${req.params.id}`);
};

exports.update = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const db = await connect();
  await db.collection("book").updateOne({ _id }, { $set: req.body });
  res.json({ data: "book is updated" });
  // res.send(`single book ID: ${req.params.id} update`);
};

exports.delete = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const db = await connect();
  await db.collection("book").deleteOne({ _id });
  res.status(204).json();
  // res.send(`single book ID: ${req.params.id} delete`);
};
