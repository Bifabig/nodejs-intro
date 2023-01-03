const express = require("express");
const bookRouter = express.Router();

bookRouter
  .route("/")
  .get((req, res) => {
    res.send("All books");
  })
  .post((req, res) => {
    res.json({ data: "Book is stored" });
  });

bookRouter
  .route("/:id")
  .get((req, res) => {
    res.send(`single book ID: ${req.params.id}`);
  })
  .patch((req, res) => {
    res.send(`single book ID: ${req.params.id} update`);
  })
  .delete((req, res) => {
    res.send(`single book ID: ${req.params.id} delete`);
  });

module.exports = bookRouter;
