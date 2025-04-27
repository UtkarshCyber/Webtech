let btn = document.getElementById("btn");
let container = document.getElementById("container");

btn.addEventListener("click", async () => {
    let apiKey = "35ace3a0";
    let movieInput = document.getElementById("movieInput").value;
    let apiURL = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieInput}`;
    
    try {
        let data = await fetch(apiURL);
        let finalData = await data.json();
        
        console.log(finalData);

        if (finalData.Response === "True") {
            container.innerHTML = `
                <h1>Title: ${finalData.Title}</h1>
                <h2>Year: ${finalData.Year}</h2>
                <h3>Rated: ${finalData.Rated}</h3>
                <h4>Director: ${finalData.Director}</h4>
                <h4>Writer: ${finalData.Writer}</h4>
                <h4>Actors: ${finalData.Actors}</h4>
                <p>Plot: ${finalData.Plot}</p>
                <img src="${finalData.Poster}" alt="Poster" />
                <h5>IMDb Rating: ${finalData.imdbRating}</h5>
                <h5>Box Office: ${finalData.BoxOffice}</h5>
            `;
        } else {
            alert("Please enter a correct movie name.");
        }
    } catch (error) {
        console.log(error);
    }
});
