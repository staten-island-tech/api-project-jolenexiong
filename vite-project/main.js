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

async function addCharacter(URL1) {
  try {
    const res = await fetch(URL1);
    const data = await res.json();
    console.log(data);
    DOMSelectors.gaveup.textContent = data[0].character;
  } catch (error) {
    console.log(error);
  }
}



addQuote(URL1);

DOMSelectors.submit.addEventListener("click", async function (event) {
  event.preventDefault();



try {
  const guess = document.getElementById('whosaid').value.toLowerCase();
  const response = await fetch(URL1);
  const data = await response.json();
  const answer = data[0].character.toLowerCase();
  const check = document.querySelector('.check');

if (guess === answer) {
  check.textContent = "you did it!!!! you are amazing and beautiful";
} else if (guess!=answer){
  check.textContent = "that's wrong...";
}
}catch(error){
  console.log(error)
}

});

DOMSelectors.giveupbtn.addEventListener("click", function() {
  addCharacter(URL1); 
});







