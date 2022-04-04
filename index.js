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
      `https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`,
      options
    )
      .then((response) => response.json())
      .then((response) => addCouple(response))
      .catch((err) => console.error(err));
  });

const fname = document
  .querySelector("#fname")
  .addEventListener("input", function () {
    return fname;
  });

const sname = document
  .querySelector("#sname")
  .addEventListener("input", function () {
    return sname;
  });
function addCouple(response){
   const percentage = makePercentage(response.percentage)
   const result = makeResult(response.result)
   percentage.appendChild(percentage)
   result.appendChild(result)

}

function makePercentage(response) {
  const percentage = document.createElement("h2");
  percentage.innerHTML = response.percentage;
  return percentage;
}

function makeResult(response) {
  const result = document.createElement("h2");
  result.innerHTML = response.result;
  return result;
}
