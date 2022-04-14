const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
    "X-RapidAPI-Key": "1e73939f2fmsha4afb2a87da5556p1074d1jsn2a756cb71d41",
  },
};
const btn = document
  .querySelector("#btn")
  .addEventListener("click", function () {
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname.value}&fname=${fname.value}`,
      options
    )
      .then((response) => response.json())
      .then((data) => makeLove(data))
      .catch((err) => console.error(err));
  });
function makeLove(love){
  const {fname, sname, percentage, result} = love
  makePercentage(percentage)
  makeResult(result)
}

function makePercentage(percentage){
document.querySelector('.percentage').textContent = `${percentage} % `
}

function makeResult(result){
  document.querySelector('.result').textContent = result
}

const fname = document
  .querySelector("#fname")
  

const sname = document
  .querySelector("#sname")
 

//--------------------------------------------------------------

  function bonjour(prenom,b,age){
     return(`bonjour ${prenom} ${b} ${age}`)
  }

  const phrase = bonjour("david", "FE", 27)
  console.log(phrase)