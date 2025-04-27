// let http=require("http")
// let server=http.createServer((req,res)=>{
//     console.log(req.url);

//     if(req.url==="/"){
//         res.writeHead(200,{"content-type":"text.html"})
//         res.write("<h1>Hello Node.JS</h1>")
//         res.end()
//     }
//     else if(req.url==="/about"){
//         res.writeHead(200,{"content-type":"text.html"})
//         res.write("<h1>Hello welcome to about page</h1>")
//         res.end()
//     }
//     else if(req.url==="/services"){
//         res.writeHead(200,{"content-type":"text.html"})
//         res.write("<h1>Hello welcome to service page</h1>")
//         res.end()
//     }
//     else{
//         res.writeHead(404,{"content-type":"text.html"})
//         res.write("<h1>Page not found</h1>")
//         res.end()
//     }
// })
// server.listen(4500,(err)=>{
//     if (err){
//         throw err;
//     }
//     console.log("server is runnng at port: http://localhost:4500")
// })

//Example 2
// let http=require("http")
// let server=http.createServer((req,res)=>{
//     console.log(req.url);
//     let path=req.url;

//     if(path==="/"){
//         res.writeHead(200,{"content-type":"text.html"})
//         res.write("<h1>Welcome to Homepage</h1>")
//         res.end()
//     }
//     else if(path.toLowerCase()==="/about"){
//         res.writeHead(200,{"content-type":"text.html"})
//         res.write("<h1>Hello welcome to about page</h1>")
//         res.end()
//     }
//     else if(path.toLowerCase()==="/services"){
//         res.writeHead(200,{"content-type":"text.html"})
//         res.write("<h1>Hello welcome to service page</h1>")
//         res.end()
//     }
//     else if(path.toLowerCase()==="/career"){
//         res.writeHead(200,{"content-type":"text.html"})
//         res.write("<h1>Hello welcome to career page")
//         res.end()
//     }
//     else{
//         res.writeHead(404,{"content-type":"text.html"})
//         res.write("<h1>Page not found</h1>")
//         res.end()
//     }
// })
// server.listen(4500,(err)=>{
//     if (err){
//         throw err;
//     }
//     console.log("server is runnng at port: http://localhost:4500")
// })

//Example 3

let http=require("http")
let fs=require("fs")
let server=http.createServer((req,res)=>{
    let path=req.url;
    if(path==='/' ||path.toLowerCase()==="/home"){
        res.writeHead(200,{"content-type":"text.html"})
        let homeData=fs.readFileSync("Home.html","utf-8")
        res.write(homeData)
        res.end()
    }else if(path.toLowerCase()==="/about"){
        res.writeHead(200,{"content-type":"text.html"})
        let aboutdata=fs.readFileSync("About.html","utf-8")
        res.write(aboutdata)
        res.end()
    }else if(path.toLowerCase()==="/services"){
        res.writeHead(200,{"content-type":"text.html"})
        let servicedata=fs.readFileSync("service.html","utf-8")
        res.write(servicedata)
        res.end()
    }else if(path.toLowerCase()==="/career"){
        res.writeHead(200,{"content-type":"text.html"})
        let careerdata=fs.readFileSync("career.html","utf-8")
        res.end()
    }else{
        res.writeHead(404,{"content-type":"text.html"})
        let error_data=fs.readFileSync("404.html","utf-8")
        res.end()
    }
})
server.listen(5500,(err)=>{
    if (err){
        throw err;
    }
    console.log("server is running at port :http://localhost:5500")
})