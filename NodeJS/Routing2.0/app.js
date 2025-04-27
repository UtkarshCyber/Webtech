let http = require("http");
let fs = require("fs");
let html = fs.readFileSync("index.html", "utf-8");

let server = http.createServer((req, res) => {
  let path = req.url.toLowerCase();

  if (path === "/" || path === "/Home") {
    res.writeHead(200, ("content-type", "text/html"));
    res.end(html.replace("({CONTENT})", "<h1>Welcome to home page</h1>"));
  } else if (path === "/service") {
    res.writeHead(200, ("content-type", "text/html"));
    res.end(html.replace("({CONTENT})", "<h1>Welcome to service page</h1>"));
  } else if (path === "/aboutus") {
    res.writeHead(200, ("content-type", "text/html"));
    res.end(html.replace("({CONTENT})", "<h1>Welcome to about page</h1>"));
  } else if (path === "/contact") {
    res.writeHead(200, ("content-type", "text/html"));
    res.end(html.replace("({CONTENT})", "<h1>Welcome to contact page</h1>"));
  } else {
    res.writeHead(404, ("content-type", "text/html"));
    let read4 = fs.readFileSync("./404.html");
    res.end(read4);
  }
});

server.listen(5500, (err) => {
  if (err) throw err;
  console.log("server is running at port : http://localhost:5500");
});