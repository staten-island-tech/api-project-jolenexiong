import './style.css'


const URL = ``;
async function getData(URL) {
    const response = await fetch(URL);
    console.log(response);
    
    const data = await response.json();
    document.querySelector("h1").textContent = data.content;
    document.querySelector("h2").textContent = data.author;
}

getData(URL);
