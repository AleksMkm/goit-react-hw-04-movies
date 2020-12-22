import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useRouteMatch } from 'react-router-dom';
import s from './MovieCard.module.css';
import imagePlaceholder from '../../images/imagePlaceholder.png';

function MovieCard({ movie }) {
  const mappedGenres = movie.genres.map(genre => genre.name).join(', ');
  const { url } = useRouteMatch();

  return (
    <>
      <div className={s.wrapper}>
        <img
          className={s.image}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : imagePlaceholder
          }
          alt={movie.title}
        />
        <div className={s.content}>
          <h2 className={s.title}>{movie.title}</h2>
          <p className={s.text}>User Score: {movie.vote_average * 10}%</p>
          <p className={s.category}>Overview:</p>
          <p className={s.text}>{movie.overview}</p>
          <p className={s.category}>Genres:</p>
          <p className={s.text}>{mappedGenres}</p>
        </div>
      </div>
      <div className={s.nav}>
        <p className={s.category}>Additional information</p>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink
              to={`${url}/cast`}
              className={s.link}
              activeClassName={s.activeLink}
            >
              Cast
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to={`${url}/reviews`}
              className={s.link}
              activeClassName={s.activeLink}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
