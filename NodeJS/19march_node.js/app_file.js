let fs=require("fs")
// console.log(fs)

//!1.) Create file (synchronous)
// fs.writeFileSync("text.txt","Laila +91 6148921365")
// //2. Create file (asynchronous)
// fs.writeFile("dilip.js","hi i am cuteBoy",(err)=>{
//     if(err){throw err};
//     console.log("File created successfully")
// })

// !Read the file
// 1.)Synchronous 
// let result=fs.readFileSync("text.txt",'utf-8')
// console.log(result)
// 2.)Asynchronous way
// fs.readFile("text.txt",'utf-8',(err,res)=>{
//     if(err){throw err};
//     console.log(res)
// })

//!Update the file
// 1.)Synchronous way
// fs.writeFileSync("text.txt","Utkarsh +91 5479623647")
//2.)Asynchronous way
// fs.writeFile("text.txt","ABC +91 1122336655447",(err)=>{
//     if(err){throw err};
//     console.log("File Updated successfully")
// })

//!Delete the file
//1.) Synchronous way
// fs.unlinkSync("dilip.js")
//2)Asynchronous way
// fs.unlink("style.css",(err)=>{
//     if(err){
//         throw err
//     }
//     console.log("File deleted successfully!!!")
// })

//File exists or not
//Synchronous way
// console.log(fs.existsSync("./app.js"));
//Asynchronous way
// fs.exists("add.js",(exist)=>{
//     console.log(exist)
// })

//Copy file
// Synchronous way
// fs.copyFileSync("add.js","add1.js")
//Asynchronous way
// fs.copyFile("add1.js", "copy.js",(err)=>{
//         if(err) throw err;
//         console.log("file copied successfully");
//     })


//File rename
//synchronous way
// fs.renameSync("add1.js", "lp.js")
    
//asynchronous way
// fs.rename("app1.js", "app2.js", (err)=>{
//     if(err) throw err;     
//     console.log("file rename successfully");
// })
    
