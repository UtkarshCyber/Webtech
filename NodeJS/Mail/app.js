let http=require("http")
let fs=require("fs")
let{parse}=require("querystring")
let nodemailer=require("nodemailer")

let server=http.createServer((req,res)=>{
  if(req.method==="POST"){
    collectReqData(req,(result)=>{
        console.log(result)
    })
    res.end()
  }else{
    res.writeHead(200,{"content-type":"text/html"})
    fs.createReadStream("./login.html","utf-8").pipe(res)
  }  
})

server.listen(5500,(err)=>{
    if(err){
        throw err
    }
    console.log("server is running at PORT:http://localhost:5500")
})

function collectReqData(request,callback){
    let form_URLENCODED="application/x-www-form-urlencoded"
    if(request.headers['content-type']===form_URLENCODED){
        let body="";
        request.on("data",chunk=>{
            body+=chunk.toString()
        })
        request.on("end",err=>{
            if (err){
                throw err;
            }
            let email=parse(body.valueOf()).email;
            let password=parse(body.valueOf()).password;
            console.log(`email is ${email} and password is ${password}`);
            let transport=nodemailer.createTransport({
                service:"gmail",
                auth:{
                    user:"utkarshmfp9275@gmail.com",
                    pass:"vriyosabhgzlhzqk"
                }
            })
            let mailOptions={
                from:"utkarshmfp9275@gmail.com",
                to:`${email}`,
                subject:"Application for re-mock",
                html:`<h1>HI ${email},You have to give re_mock on 18.01.2090</h1>`
            }
            transport.sendMail(mailOptions,(err)=>{
                if (err){
                    throw err;
                }
                console.log("mail sended successfully!!")
            })
        })
    }else{
        callback(null)
    }
}