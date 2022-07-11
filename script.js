let xmen = 0;
let avenger = 0;
let latest = 0;
let batman = 0;

const parent = document.getElementById("poster");
const addMoviesToDom = (movies) => {
	movies.forEach((movie) => {
		let li = document.createElement("li");
		let img = document.createElement("img");
		let link = document.createElement("a");
		li.classList.add("li");
		img.src = movie.poster;
		link.href = "https://www.imdb.com/title/" + movie.imdbID;
		parent.appendChild(li);
		li.appendChild(img);
		img.appendChild(link);
	});
};
addMoviesToDom(movies);

const titles = movies.map((movie) => movie.title);

const filmFilter = document.getElementsByClassName("film-filter");
Array.from(filmFilter).forEach((button) => {
	button.addEventListener("change", function handleOnChangeEvent(event) {
		//console.log(event.target.value);
		switch (event.target.value) {
			case "Latest":
				console.log("I am the latest");
				break;
			case "Avenger movies":
				console.log("I am the avenger button");
				break;
			case "X-Men movies":
				console.log("I am the x-men button");
				break;
			case "Princess movies":
				const princess = titles.filter((title) => {
					return title === "Princess";
				});
				addMoviesToDom(princess);
				//console.log("I am a princess");
				break;
			case "Batman movies":
				console.log("i am Batman");
				break;
			default:
				console.log("click something");
		}
	});
});
