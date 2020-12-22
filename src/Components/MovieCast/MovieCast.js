import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moviesAPI from '../../services/movies-api';
import Loader from '../Loader';
import s from './MovieCast.module.css';
import imagePlaceholder from '../../images/imagePlaceholder.png';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function MovieCast({ id }) {
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(Status.PENDING);
    moviesAPI
      .getMovieCast(id)
      .then(data => {
        console.log(data.cast);
        if (data.cast.length === 0) {
          throw new Error('Cast data is not available');
        }
        setCast(data.cast);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [id]);

  return (
    <>
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED && (
        <div className={s.wrapper}>
          <ul className={s.list}>
            {cast.map(actor => {
              return (
                <li className={s.item} key={actor.cast_id}>
                  <img
                    className={s.image}
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                        : imagePlaceholder
                    }
                    alt={actor.name}
                  />
                  <p className={s.name}>{actor.name}</p>
                  <p className={s.character}>
                    Character: {actor.character ? actor.character : 'unknown'}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {status === Status.REJECTED && (
        <p style={{ fontFamily: 'Roboto, sans-serif' }}>{error.message}</p>
      )}
    </>
  );
}

MovieCast.propTypes = {
  id: PropTypes.number.isRequired,
};
