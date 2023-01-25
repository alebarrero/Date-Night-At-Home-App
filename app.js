const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4cc24add61mshaefd388a3de842fp16df08jsnd17fb033b479',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

fetch('https://moviesdatabase.p.rapidapi.com/titles?genre=Romance&limit=9&endYear=2023&startYear=2015', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));