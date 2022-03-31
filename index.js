const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
		'X-RapidAPI-Key': '1e73939f2fmsha4afb2a87da5556p1074d1jsn2a756cb71d41'
	}
};

fetch('https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=John', options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
    });

function sname(){
    const iSname = document.getElementById('#sname')
    console.log(iSname)
}
