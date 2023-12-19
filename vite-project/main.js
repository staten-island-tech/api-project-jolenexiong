

const URL = 'https://southparkquotes.onrender.com/';

// async function getData(URL) {
//   const reponse = await fetch(URL);
//   console.log(reponse);
// //   let result= await fetch ("https://southparkquotes.onrender.com/v1/quotes/search/cartman");
// // let data = await result.json();
// // console.log(data);
// DOMSelectors.quote.textContent=data.quote;
// }

async function addQuote(URL) {
  const response = await fetch(URL);
  console.log(response);
  const data = await response.json();
  DOMSelectors.quote.textContent = data.quote;
}

addQuote(URL);

const DOMSelectors = {
  quote: document.querySelector(".quote")
}





