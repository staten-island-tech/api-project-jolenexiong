import './style.css'

async function getData() {
  let result= await fetch ("https://southparkquotes.onrender.com/v1/quotes/search/cartman");
let data = await result.json();
console.log(data);
}
getData();