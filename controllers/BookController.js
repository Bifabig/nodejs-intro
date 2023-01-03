const { ObjectId } = require("mongodb");
const Book = require("../Models/Book");
// const connect = require("../database/db");

exports.index = async (req, res) => {
  // const db = await connect;
  // const books = await db.collection("books").find().toArray();
  const books = await Book.find();
  res.json(books);
};

exports.store = async (req, res) => {
  // const db = await connect();
  // await db.collection("book").insertOne(req.body);
  try {
    await Book.create(req.body);
    res.status(201).json({ data: "Book is stored" });
  } catch (error) {
    res.json(error.errors);
  }
};

exports.show = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const book = await Book.find({ _id });
  // const db = await connect();
  // const book = await db.collection("book").find({ _id }).toArray();
  res.json(book);
  // res.send(`single book ID: ${req.params.id}`);
};

exports.update = async (req, res) => {
  const _id = ObjectId(req.params.id);
  await Book.updateOne({ _id }, { $set: req.body });
  // const db = await connect();
  // await db.collection("book").updateOne({ _id }, { $set: req.body });
  res.json({ data: "book is updated" });
  // res.send(`single book ID: ${req.params.id} update`);
};

exports.delete = async (req, res) => {
  const _id = ObjectId(req.params.id);
  await Book.deleteOne({ _id });
  // const db = await connect();
  // await db.collection("book").deleteOne({ _id });
  res.status(204).json();
  // res.send(`single book ID: ${req.params.id} delete`);
};
