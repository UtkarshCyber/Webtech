let http=require("http")
let server=http.createServer((req,res)=>{
    res.setHeader("content-type","application/json")
    res.setHeader('Access-Control-Allow-Origin','*')
    res.statuscode=200;
    let Employee=[
        {
            emp_id:101,
            emp_name:"Rakshita",
            emp_salary:"2 LPA",
            emp_gender:"Female",
            emp_location:"Bangalore"
        },
        {
            emp_id:101,
            emp_name:"Mohan",
            emp_salary:"8 LPA",
            emp_gender:"Male",
            emp_location:"Bangalore"
        },
        {
            emp_id:99,
            emp_name:"Utkarsh",
            emp_salary:"10 LPA",
            emp_gender:"Male",
            emp_location:"Whitefield"
        },
        {
            emp_id:420,
            emp_name:"Lathesh",
            emp_salary:"2 Cr",
            emp_gender:"Male",
            emp_location:"Majestic"
        },
        {
            emp_id:421,
            emp_name:"SRK",
            emp_salary:"5 LPA",
            emp_gender:"Male",
            emp_location:"Bangalore"
        },
        {
            emp_id:422,
            emp_name:"Ria",
            emp_salary:"12 LPA",
            emp_gender:"Female",
            emp_location:"Bangalore"
        },
    ]
    res.end(JSON.stringify(Employee))
})
server.listen(5100,(err)=>{
    if(err){
        throw err;
    }
    console.log("server is running is at PORT:http://localhost:5100");
})