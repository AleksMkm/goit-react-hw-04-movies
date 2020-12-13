const BASE_URL = `https://api.themoviedb.org/3`;
const KEY = `d91911ebb88751cf9e5c4b8fdf4412c9`;

//https:developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https:developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.
// https:developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
// https:developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
// https:developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.

function getTrendingData() {
  const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&language=en-US`;
  return fetch(url)
    .then(response => response.json())
    .then(response => {
      return response;
    });
}

function getSearchData(query) {
  const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}`;
  return fetch(url)
    .then(response => response.json())
    .then(response => {
      return response;
    });
}

const api = {
  getTrendingData,
  getSearchData,
};

export default api;
