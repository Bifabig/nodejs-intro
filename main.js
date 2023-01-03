const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3001;
const routes = require("./routes/index");
const connectDB = require("./database/db");
// const test = require("./middleware/test");

app.set("view engine", "pug");

// console.log(routes);
// app.use(test);
app.use(bodyParser.json());
app.use(routes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
