let princess = 0;
let xmen = 0;
let avenger = 0;
let latest = 0;
let batman = 0;

const titles = movies.map((movie) => movie.title);

const movielist = document.getElementById("listOfPoster");
const empty = () => {
	movielist.innerHTML = "";
};

const addMoviesToDom = (movies) => {
	movies.forEach((movie) => {
		const parent = document.getElementById("listOfPoster");
		const newLi = document.createElement("li");
		const newImg = document.createElement("img");
		const link = document.createElement("a");
		newLi.classList.add("filmposterli");
		parent.appendChild(newLi);
		newLi.appendChild(link);
		link.href = "https://www.imdb.com/title/" + movie.imdbID;
		link.appendChild(newImg);
		newImg.src = movie.poster;
		newImg.classList.add("poster");
	});
};
addMoviesToDom(movies);

const filmFilter = document.getElementsByClassName("film-filter");
Array.from(filmFilter).forEach((button) => {
	button.addEventListener("change", function handleOnChangeEvent(event) {
		//console.log(event.target.value);
		switch (event.target.value) {
			case "Latest":
				const latest = movies.filter((movie) => {
					console.log(parseFloat(movie.year));
					console.log(movie.year > 2014);
					return movie.year > 2014;
				});
				empty();
				addMoviesToDom(latest);
				//console.log("I am the latest");
				break;
			case "Avenger movies":
				const avenger = movies.filter((movie) => {
					console.log(movie.title.toLowerCase().includes("avenger"));
					console.log(movie.title.toLowerCase());
					return movie.title.toLowerCase().includes("avenger");
				});
				empty();
				addMoviesToDom(avenger);
				//console.log("I am the avenger button");
				break;
			case "X-Men movies":
				const xmen = movies.filter((movie) => {
					console.log(movie.title.toLowerCase().includes("X-men"));
					console.log(movie.title.toLowerCase());
					return movie.title.toLowerCase().includes("x-men");
				});
				empty();
				addMoviesToDom(xmen);
				//console.log("I am the x-men button");
				break;
			case "Princess movies":
				const princess = movies.filter((movie) => {
					console.log(movie.title.toLowerCase().includes("princess"));
					console.log(movie.title.toLowerCase());
					return movie.title.toLowerCase().includes("princess");
				});
				empty();
				addMoviesToDom(princess);

				//console.log("I am a princess");
				break;
			case "Batman movies":
				const batman = movies.filter((movie) => {
					console.log(movie.title.toLowerCase().includes("batman"));
					console.log(movie.title.toLowerCase());
					return movie.title.toLowerCase().includes("batman");
				});
				empty();
				addMoviesToDom(batman);
				//console.log("i am Batman");
				break;
			default:
				addMoviesToDom(movies);
			//console.log("click something");
		}
	});
});

// search bar
const searchInput = document.getElementById("searchInput");

// function searchbar
const search = searchInput.addEventListener(`input`, (event) => {
	empty();
	const value = event.target.value.toLowerCase();
	console.log(value);

	const searchMovies = movies.filter((movie) => {
		return movie.title.toLowerCase().includes(value);
	});
	console.log(searchMovies);
	addMoviesToDom(searchMovies);
});
