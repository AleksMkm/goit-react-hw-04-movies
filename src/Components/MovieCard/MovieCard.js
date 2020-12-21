import React from 'react';
import PropTypes from 'prop-types';
import s from './MovieCard.module.css';

function MovieCard({ movie }) {
  const mappedGenres = movie.genres.map(genre => genre.name).join(', ');

  return (
    <div className={s.wrapper}>
      <img
        className={s.image}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
  );
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
