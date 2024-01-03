import "./css/style.css";



// async function getData(URL) {
//   const reponse = await fetch(URL);
//   console.log(reponse);
// //   let result= await fetch ("https://southparkquotes.onrender.com/v1/quotes/search/cartman");
// // let data = await result.json();
// // console.log(data);
// }
const URL1 = 'https://southparkquotes.onrender.com/v1/quotes';


const DOMSelectors = {
  question: document.querySelector("#question"),
  submit: document.querySelector(".submitbtn"),
}

async function addQuote(URL1) {
  try{
  const res = await fetch(URL1);
  const data = await res.json();
  console.log(data);
DOMSelectors.question.textContent = data[0].quote;}
  catch(error){
    console.log(error)
  }
}

addQuote(URL1);

DOMSelectors.submit.addEventListener('click', function (event) {
  event.preventDefault();
const guess = document.getElementById('whosaid').value;
const answer = data[0].character;
const correct = document.querySelector('.check');

if (guess()=== answer()) {
  correct.textContent = 'Yass you did it!!!! you are amazing and beautiful';
} else {
  correct.textContent = 'wow you really flopped...';
}
});











