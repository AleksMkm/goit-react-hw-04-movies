import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesAPI from '../services/movies-api';
import MovieCard from '../components/MovieCard';
import Loader from '../components/Loader';
import ErrorView from './ErrorView';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function MovieDetailsView() {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const { movieId } = useParams();

  useEffect(() => {
    setStatus(Status.PENDING);
    moviesAPI
      .getMovieById(movieId)
      .then(data => {
        console.log(data);
        if (data.status_code === 34) {
          throw new Error('ai-ai-ai');
        }
        setMovie(data);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED && <MovieCard movie={movie} />}
      {status === Status.REJECTED && <ErrorView />}
    </>
  );
}
