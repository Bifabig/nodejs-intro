const express = require("express");
const router = express.Router();
const bookRouter = require("./book");
const path = require("path");

router.get("/", (req, res) => {
  res.render(path.join("index"), { name: "bifa" });
});

router.use("/book", bookRouter);

router.all("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../page/404.html"));
});

module.exports = router;
