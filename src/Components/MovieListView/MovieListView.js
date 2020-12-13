import React from 'react';
import PropTypes from 'prop-types';
// import s from './MovieListView.module.css';

function MovieListView({ movies, title }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              {' '}
              <a
                href="https://developers.themoviedb.org/3/search/search-movies"
                target="blank"
              >
                {movie.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MovieListView;

MovieListView.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};
