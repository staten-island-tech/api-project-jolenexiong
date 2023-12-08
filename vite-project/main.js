import './style.css'


const URL = `https://southparkquotes.onrender.com/`;

async function getData() {
    let result = await fetch (
        URL
    );
    let data = await result.json ();
    console.log(data);
}

getData(URL);
