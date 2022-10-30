import listOfGenres from "./genreList";
const popularGallery=document.querySelector(".gallery")

function fetchPopular() {
    return fetch("https://api.themoviedb.org/3/movie/157336?api_key=ee94c28793e897f5ab3e42b6b141640f&append_to_response=videos").then(
      (response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      }
    );
  }
 
  fetchPopular()
  .then((films)=>renderPopularList(films.results))
  .catch((error) => console.log(error));
 
  function renderPopularList(films){
    const markup=films.map((film)=>{
        return `<li class="card__item">
        <div class="card__thumb">
            <img class="card__img" src="https://image.tmdb.org/t/p/w500${film.poster_path}" alt="${film.title}">
        </div>
        <h2 class="card__title">
        ${film.title}
        </h2>
        <p class="card__text">
            <span class="card__genres">${listOfGenres(Object.values(film.genre_ids))}</span> | <span class="card__date">${film.release_date}</span>
        </p>
        </li>`
    }).join("");
    popularGallery.innerHTML = markup;
 
  }
  