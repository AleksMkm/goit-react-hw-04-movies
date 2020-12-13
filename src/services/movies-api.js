const BASE_URL = `https://api.themoviedb.org/3`;
const KEY = `d91911ebb88751cf9e5c4b8fdf4412c9`;

//https:developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https:developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.
// https:developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
// https:developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
// https:developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.

function fetchPopularArticles() {
  const url = `${BASE_URL}/movie/popular?api_key=${KEY}&language=en-US&page=${this.page}`;
  return fetch(url)
    .then(response => response.json())
    .then(({ results }) => {
      return results;
    });
}

function fetchSearchArticles() {
  const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`;
  return fetch(url)
    .then(response => response.json())
    .then(({ results }) => {
      return results;
    });
}

function fetchPopularArticlesPages() {
  const url = `${BASE_URL}/movie/popular?api_key=${KEY}&language=en-US&page=${this.page}`;
  return fetch(url).then(response => response.json());
}

function fetchSearchArticlesPages() {
  const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`;
  return fetch(url).then(response => response.json());
}

function fetchGenres() {
  const url = `${BASE_URL}/genre/movie/list?api_key=${KEY}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data.genres;
    });
}

function insertGenresToMovieObj() {
  return this.fetchPopularArticles().then(data => {
    return this.fetchGenres().then(genresList => {
      return data.map(movie => ({
        ...movie,
        release_date: movie.release_date.split('-')[0],
        genres: movie.genre_ids
          .map(id => genresList.filter(el => el.id === id))
          .flat(),
      }));
    });
  });
}

function insertGenresToSearchObj() {
  return this.fetchSearchArticles().then(data => {
    return this.fetchGenres().then(genresList => {
      let release_date;
      return data.map(movie => ({
        ...movie,
        release_date: movie.release_date
          ? movie.release_date.split('-')[0]
          : 'n/a',
        genres: movie.genre_ids
          ? movie.genre_ids
              .map(id => genresList.filter(el => el.id === id))
              .flat()
          : 'n/a',
      }));
    });
  });
}

const api = {
  fetchSearchArticles,
};

export default api;
