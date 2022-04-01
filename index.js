const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
		'X-RapidAPI-Key': '1e73939f2fmsha4afb2a87da5556p1074d1jsn2a756cb71d41'
	}
};

fetch('https://love-calculator.p.rapidapi.com/getPercentage?sname=david&fname=fifi', options)
	.then(response => response.json())
	.then(data => {
        const snamei = addsnamei(data.sname)
        const fnamei = addFnamei(data.fname)
        const h2 = addH2(data.percentage)
        const h3 = addAresult(data.result)
        console.log(data)        
    });
    
    function addsnamei(){
       const snamei = document.getElementById('sname').value
       return snamei
    }

    function addFnamei(){
        const fnamei = document.getElementById('fname').value
        return fnamei
     }
 

     function addH2(){
        const percentage = document.getElementById('percentage')
        return percentage
     }
 
    
     function addAresult(){
        const result = document.getElementById('result')
        return result
     }
 



