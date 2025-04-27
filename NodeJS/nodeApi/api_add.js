exports.asyncFunction = async function (containerId) {
    try {
        let container = document.getElementById(containerId);
        console.log(container);

        let response = await fetch('http://api.github.com/users');
        let finalData = await response.json();
        console.log(finalData);

        finalData.forEach((m) => {
            console.log(m);
            container.innerHTML += `
            <div id='cards'>
                <img src="${m.avatar_url}" alt="Avatar"/>
                <h2>${m.id}</h2>
                <h1>${m.login}</h1>
                <a href="${m.url}">Link</a>
            </div>`;
        });
    } catch (error) {
        console.error("Error:", error.message);
    }
};
