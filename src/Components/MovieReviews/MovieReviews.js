import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moviesAPI from '../../services/movies-api';
import Loader from '../Loader';
import s from './MovieReviews.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function MovieReviews({ id }) {
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(Status.PENDING);
    moviesAPI
      .getMovieReviews(id)
      .then(data => {
        console.log(data.results);
        if (data.results.length === 0) {
          throw new Error("We don't have any reviews for this movie");
        }
        setReviews(data.results);
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
        <ul className={s.list}>
          {reviews.map(review => {
            return (
              <li className={s.item} key={review.id}>
                <p className={s.author}>{review.author}</p>
                <p className={s.text}>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {status === Status.REJECTED && (
        <p style={{ fontFamily: 'Roboto, sans-serif' }}>{error.message}</p>
      )}
    </>
  );
}

MovieReviews.propTypes = {
  id: PropTypes.number.isRequired,
};
