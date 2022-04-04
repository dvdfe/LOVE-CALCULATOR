const options = {
   method: 'GET',
   headers: {
      'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
      'X-RapidAPI-Key': '1e73939f2fmsha4afb2a87da5556p1074d1jsn2a756cb71d41'
   }
};
const btn = document.querySelector('#btn').addEventListener('click', function () {
   fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`, options)
   .then(response => response.json())
   .then(response => console.log(response))
   .catch(err => console.error(err))
})

const fname = document.querySelector('#fname').addEventListener('input', function() {
   return fname
})

const sname = document.querySelector('#sname').addEventListener('input', function() {
   return sname
})

