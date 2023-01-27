// 	const body = document.body
	// body.append("test")
	
	const movieImageDiv = document.getElementById("movieImage");
	console.log(movieImageDiv)
	function displayMovie(data){
		const randomNumber= Math.floor(Math.random() * 49) 
		const options = {
			method: 'GET',
			// params: {titleType: 'movie', genre: 'romance', endYear: '2023', startYear: '2015'},
			headers: {
			  'X-RapidAPI-Key': '4cc24add61mshaefd388a3de842fp16df08jsnd17fb033b479',
			  'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
			}
		  };
		// const options = {
		// 	method: 'GET',
		// 	params:{titleType:"movie"},
		// 	headers: {
		// 		'X-RapidAPI-Key': '4cc24add61mshaefd388a3de842fp16df08jsnd17fb033b479',
		// 		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
		// 	}
		// };
		
		fetch('https://moviesdatabase.p.rapidapi.com/titles?titleType=movie&genre=Romance&endYear=2023&startYear=2021&limit=50',options)
		
			.then(response => response.json())
			.then(response => {
				console.log(response)
				var img = document.createElement("img")
				img.setAttribute("src",response.results[randomNumber].primaryImage.url )
				const title = document.createElement("p")
				title.textContent = response.results[randomNumber].titleText.text
				const year = document.createElement("p")
				year.textContent = response.results[randomNumber].titleText.text
				const description = document.createElement("p")
				description.textContent = response.results[randomNumber].titleText.text
				movieImageDiv.append(img,title)
			})
			.catch(err => console.error(err));
	}
	displayMovie()
