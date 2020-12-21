import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieList.module.css';

function MovieList({ movies, title }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} className={s.link}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};
