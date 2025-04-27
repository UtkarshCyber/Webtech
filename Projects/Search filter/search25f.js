let container = document.getElementById("container");
let search_bar = document.getElementById("search");

async function fetchapi() {
    try {
        let data = await fetch("https://dummyjson.com/products");  
        let result = await data.json();
        let x = result.products;  
        function displayProducts(products) {
            container.innerHTML = ""; 
            products.forEach((m) => {
                container.innerHTML += `
                    <div id="card">
                        <h1>${m.title}</h1> 
                        <div id="ig">
                            <img src="${m.images[0]}" alt="${m.title}">
                        </div>
                        <h1>${m.id}</h1>
                        <h1>${m.warrantyInformation || 'No Warranty Info'}</h1>
                        <h1>${m.category}</h1>
                        <h1>$${m.price}</h1>
                        <h1>${m.description}</h1>
                    </div>`;
            });
        } 
        displayProducts(x);
        search_bar.addEventListener("input", () => {
            let value = search_bar.value;
            let filteredProducts = x.filter(({ title }) => {
                return title.toLowerCase().includes(value.toLowerCase());
            });
            displayProducts(filteredProducts);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchapi();
