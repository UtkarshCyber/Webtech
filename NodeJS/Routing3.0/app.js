//Creating form and accepting  the user input and redirecting to other page
let http=require("http")
let fs=require("fs")
let server =http.createServer((req,res)=>{
    let url=req.url;
    let method=req.method;
    if(url==='/'){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<html>")
        res.write("<head>")
        res.write("<title>Enter your message</title>")
        res.write("</head>")
        res.write("<body>")
        res.write("<form action='/message' method='POST'><input placeholder='Enter your message' name='message' type='text'/><button type='submit'>Send</button></form>")
        res.write("</body>")
        res.write("</html>")
    }
    if(url==='/message'&& method==='POST'){
        let body=[]
        req.on("data",chunk=>{
            console.log(chunk);
            body.push(chunk)
        })
        req.on("end",err=>{
            let parsedBody=Buffer.concat(body).toString()
            console.log(parsedBody);
            let message=parsedBody.split("=")[1]
            console.log(parsedBody.split('='));
            fs.writeFileSync("message.txt",message)
     
        })
        res.write("<h1>Welcome to my first page</h1>")
        res.end()
    }
})

server.listen(4500,(err)=>{
    if (err) throw err
    console.log("server is running at PORT:http://localhost:4500")
})