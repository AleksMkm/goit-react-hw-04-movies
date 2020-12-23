import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieList.module.css';
import imagePlaceholder from '../../images/imagePlaceholder.png';

function MovieList({ movies, title }) {
  const location = useLocation();

  return (
    <div className={s.wrapper}>
      <h2>{title}</h2>
      <ul className={s.list}>
        {movies.map(movie => {
          return (
            <li key={movie.id} className={s.item}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: location.pathname,
                }}
                className={s.link}
              >
                <img
                  className={s.image}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : imagePlaceholder
                  }
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
