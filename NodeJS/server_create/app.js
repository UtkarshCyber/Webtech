// let http = require("http")
// let server=http.createServer((req,res)=>{
//     res.write("<h1>Hello Node.js</h1>")
//     res.write("<h1>Hello Node.js</h1>")
//     res.write("<h1>Hello Node.js</h1>")
//     res.write("<h1>Hello Node.js</h1>")
//     res.write("<h1>Hello Node.js</h1>")
//     res.write("<h1>Hello Node.js</h1>")
//     res.write("<h1>Hello Node.js</h1>")
//     res.end()
// })
// server.listen(4500,(err)=>{
//     if(err)
//         {throw err;}
//     console.log("Server is running at port: http://localhost:4500");
// })
// let http = require("http");

// let server = http.createServer((req, res) => {
//     res.write("<html>");
//     res.write("<head><title>NodeJS</title></head>");
//     res.write("<body>");
//     res.write("<h1>Hi I am NodeJS & ExpressJs</h1>");

//     res.write(`
//         <form action="/submit" method="POST">
//             <label for="name">Name:</label>
//             <input type="text" id="name" name="name" required><br><br>
//             <label for="email">Email:</label>
//             <input type="email" id="email" name="email" required><br><br>
//             <button type="submit">Submit</button>
//         </form>
//     `);

//     res.write("</body>");
//     res.write("</html>");
//     res.end();
// });

// server.listen(4500, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("Server is running at port: http://localhost:4500");
// });

// let http = require("http");

// let server = http.createServer((req, res) => {
//     res.write("<html>");
//     res.write("<head><title>NodeJS</title></head>");
//     res.write("<body>");
//     res.write("<h1>Hi I am NodeJS & ExpressJs</h1>");

//     res.write(`
//         <form action="/submit" method="POST">
//             <label for="name">Name:</label>
//             <input type="text" id="name" name="name" required><br><br>
//             <label for="email">Email:</label>
//             <input type="email" id="email" name="email" required><br><br>
//             <button type="submit">Submit</button>
//         </form>
//     `);

//     res.write("</body>");
//     res.write("</html>");
//     res.end();
// });
// let PORT=4500
// server.listen(PORT, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("Server is running at port: http://localhost:4500");
// });

let http=require("http")
let fs=require("fs")
let server=http.createServer((req,res)=>{
    let readData=fs.readFileSync("./text.txt","utf-8")
    res.writeHead(200,{'content-type':"text.txt"})
    res.end(readData)
})
server.listen(4500,(err)=>{
    if(err){
        throw err;
    }
    console.log("Server is running at port :http://localhost:4500")
})
