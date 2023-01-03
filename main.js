const express = require("express");
const app = express();
const PORT = 3001;
const routes = require("./routes/index");
app.set("view engine", "pug");

// console.log(routes);
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
