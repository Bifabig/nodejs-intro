const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("page/home.html", "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.write(data);
      res.end();
    });
    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.end(JSON.stringify({ data: "hello world" }));
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("page/about.html", "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.readFile("page/404.html", "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
