// 	const body = document.body
	// body.append("test")
	let randomMovieButton=document.getElementById("random-movie-button");
	randomMovieButton.addEventListener("click",displayMovie)
	let randomRecipeButton=document.getElementById("recipe-button");
	randomRecipeButton.addEventListener("click",displayRecipe)
	const movieImageDiv = document.getElementById("movieImage");
	const recipeDiv = document.getElementById("recipe-div");
	console.log(movieImageDiv)
	function displayMovie(){
		movieImageDiv.innerHTML="";
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
				img.setAttribute("src",response.results[randomNumber].primaryImage.url );
				// 	
				img.setAttribute("width","300");
				const title = document.createElement("h5")
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

	//*2nd API showing random recipes*//

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '263e49066bmsh07dbf95a53e897bp1881f6jsn19da50621ccf',
			'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
		}
	};
	
	fetch('https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=italian', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));

		function displayRecipe(){
			recipeDiv.innerHTML="";
			const randomNumber= Math.floor(Math.random() * 10) 
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': '263e49066bmsh07dbf95a53e897bp1881f6jsn19da50621ccf',
					'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
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
			
			fetch('https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=italian', options)
		.then(response => response.json())
				.then(response => {
					console.log(response)
					// var img = document.createElement("img")
					// img.setAttribute("src",response.results[randomNumber].primaryImage.url );
					// img.setAttribute("height","400");
					// img.setAttribute("width","400");
					const title = document.createElement("h4")
					title.textContent = response[randomNumber].title;
					const servings = document.createElement("h5")
					servings.textContent = response[randomNumber].servings;
					const ingredients = document.createElement("p")
					ingredients.textContent = response[randomNumber].ingredients;
					const br = document.createElement("br")
					const instructions = document.createElement("p")
					instructions.textContent = response[randomNumber].instructions;

					recipeDiv.append(title,servings,ingredients,br,instructions)
					// movieImageDiv.append(img,title)
				})
				.catch(err => console.error(err));
		}
