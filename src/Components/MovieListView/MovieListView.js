import React from 'react';
import PropTypes from 'prop-types';
import s from './MovieListView.module.css';

function MovieListView({ movies, title, getMovieId }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <button data-id={movie.id} onClick={getMovieId} className={s.btn}>
                {movie.title}
              </button>
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
