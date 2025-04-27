let data=fetch("http://localhost:5100",{mode:"cors"})
console.log(data)
data.then((response)=>{
    console.log(response);
    let finalData=response.json()
    console.log(finalData);
    finalData.then((result)=>{
        console.log(result)
    })
})