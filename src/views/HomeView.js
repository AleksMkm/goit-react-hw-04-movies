import React, { useState, useEffect } from 'react';
import moviesAPI from '../services/movies-api';
import MovieList from '../Components/MovieList';
import Loader from '../Components/Loader';
import ErrorView from './ErrorView';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function HomeView() {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    moviesAPI
      .getTrendingData()
      .then(data => {
        console.log(data.results);
        setMovies(data.results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setStatus(Status.REJECTED);
      });
  }, []);

  return (
    <>
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED && (
        <MovieList movies={movies} title="Trending today" />
      )}
      {status === Status.REJECTED && <ErrorView />}
    </>
  );
}
