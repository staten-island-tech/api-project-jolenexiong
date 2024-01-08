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
  refresh: document.querySelector("#refresh"),
  app: document.querySelector(".app"),
  gaveup: document.querySelector("#gaveup"),
  giveupbtn: document.querySelector(".giveupbtn"),
 
}

let currentQuote = null;

async function addQuote(URL1) {
  try {
    const res = await fetch(URL1);
    const data = await res.json();
    console.log(data);
    DOMSelectors.question.textContent = data[0].quote;
    currentQuote = data[0];
  }
  catch (error) {
    console.log(error);
  }
}




addQuote(URL1);

DOMSelectors.submit.addEventListener("click", async function (event) {
  event.preventDefault();

  try {
    const guess = document.getElementById('whosaid').value.toLowerCase();
    if (currentQuote) {
    const answer = currentQuote.character.toLowerCase();
    const check = document.querySelector('.check');
    if (guess === answer) {
      check.textContent = "you did it!!!! you are amazing and beautiful";
    } else {
      check.textContent = "that's wrong...";
    }
  } 
} catch (error) {
  console.error(error);
}
});


DOMSelectors.giveupbtn.addEventListener("click", async function (event) {
  event.preventDefault();
  try {
    const res = await fetch(URL1);
    const data = await res.json();
    DOMSelectors.gaveup.textContent = currentQuote.character;
  }
  catch (error) {
    console.log(error);
  }
}
);





