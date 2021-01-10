import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import moviesAPI from '../../services/movies-api';
import Loader from '../Loader';
import s from './MovieReviews.module.css';

export default function MovieReviews({ id }) {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ['movieReviews', id],
    async () => {
      const data = await moviesAPI.getMovieReviews(id);
      console.log(data.results);
      if (data.results.length === 0) {
        throw new Error("We don't have any reviews for this movie");
      }
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
        <ul className={s.list}>
          {data.results.map(review => {
            return (
              <li className={s.item} key={review.id}>
                <p className={s.author}>{review.author}</p>
                <p className={s.text}>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {isError && (
        <p style={{ fontFamily: 'Roboto, sans-serif' }}>{error.message}</p>
      )}
    </>
  );
}

MovieReviews.propTypes = {
  id: PropTypes.number.isRequired,
};
