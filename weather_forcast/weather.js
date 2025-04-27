let btn=document.getElementById("btn")
let container=document.getElementById('container')
btn.addEventListener("click",async()=>{
    let apiKey="0135c0a7a5199009d87f7fcf4cd208b9";
    let city=document.getElementById("city").value;
    let apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        let data=await fetch(apiURL)
        console.log(data)
        let finalData=await data.json()
        console.log(finalData)
            if(finalData.cod===200){
                container.innerHTML=`
                <h1>Cityname:${finalData.name}</h1>
                <h2>Temp:${finalData.main.temp}</h2>
                <h2>Description:${finalData.weather[0].description}</h2>
                <h2>Country:${finalData.sys.country}</h2> 
                `;
            }
            else{
                alert("Please enter correct city name")
            }
    } catch (error) {
        console.log(error)
    }
});