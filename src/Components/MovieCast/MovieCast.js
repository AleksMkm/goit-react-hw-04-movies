import React from 'react';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';
import moviesAPI from '../../services/movies-api';
import Loader from '../Loader';
import s from './MovieCast.module.css';
import imagePlaceholder from '../../images/imagePlaceholder.png';

export default function MovieCast({ id }) {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ['movieCast', id],
    async () => {
      const data = await moviesAPI.getMovieCast(id);
      if (data.cast.length === 0) {
        throw new Error('Cast data is not available');
      }
      console.log(data.cast);
      return data;
    },
    {
      retry: false,
    },
  );

  return (
    <>
      {isLoading && <Loader />}
      {isSuccess && (
        <div className={s.wrapper}>
          <ul className={s.list}>
            {data.cast.map(actor => {
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
      {isError && (
        <p style={{ fontFamily: 'Roboto, sans-serif' }}>{error.message}</p>
      )}
    </>
  );
}

MovieCast.propTypes = {
  id: PropTypes.number.isRequired,
};
