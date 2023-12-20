import "./css/style.css";



// async function getData(URL) {
//   const reponse = await fetch(URL);
//   console.log(reponse);
// //   let result= await fetch ("https://southparkquotes.onrender.com/v1/quotes/search/cartman");
// // let data = await result.json();
// // console.log(data);
// }
const URL = 'https://southparkquotes.onrender.com/v1/quotes';

async function addQuote(URL) {
  const res = await fetch(URL);
  console.log(res);
  const data = await res.json();
  console.log(data);
  document.querySelector("h1").textContent = data.quote;
}


addQuote(URL);






