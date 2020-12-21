import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieList.module.css';

function MovieList({ movies, title }) {
  return (
    <div className={s.wrapper}>
      <h2>{title}</h2>
      <ul className={s.list}>
        {movies.map(movie => {
          return (
            <li key={movie.id} className={s.item}>
              <Link to={`/movies/${movie.id}`} className={s.link}>
                <img
                  className={s.image}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <p className={s.title}>{movie.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};
