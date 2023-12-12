import './style.css'

async function getData() {
  let result= await fetch ("https://southparkquotes.onrender.com/v1/quotes/search/cartman");
let data = await result.json();
console.log(data);
DOMSelectors.quote.textContent=data.quote
}

getData();

const DOMSelectors = {
  quote: document.querySelector(".quote")
}





