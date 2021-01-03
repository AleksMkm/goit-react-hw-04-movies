import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Redirect, Route, useParams, useRouteMatch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import moviesAPI from '../services/movies-api';
import MovieCard from '../Components/MovieCard';
import Loader from '../Components/Loader';
import ErrorView from './ErrorView';
import Button from '../Components/Button';

const MovieCast = lazy(() =>
  import('../Components/MovieCast' /* webpackChunkName: "movie-cast" */),
);
const MovieReviews = lazy(() =>
  import('../Components/MovieReviews' /* webpackChunkName: "movie-reviews" */),
);

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function MovieDetailsView() {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const { slug } = useParams();
  const { url, path } = useRouteMatch();

  const location = useLocation();

  const movieId = slug.match(/[0-9]+$/)[0];

  const isValidRoute =
    location.pathname === url ||
    location.pathname === `${url}/reviews` ||
    location.pathname === `${url}/cast`;

  useEffect(() => {
    setStatus(Status.PENDING);
    moviesAPI
      .getMovieById(movieId)
      .then(data => {
        console.log(data);
        if (data.status_code === 34) {
          throw new Error('No details for this movie');
        }
        setMovie(data);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {!isValidRoute && <Redirect to="/" />}

      <div style={{ width: '100%' }}>
        <Button route={location.state} />
      </div>

      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED && <MovieCard movie={movie} />}
      {status === Status.REJECTED && <ErrorView title={error.message} />}

      <Suspense fallback={<Loader />}>
        <Route path={`${path}/cast`}>
          {movie && <MovieCast id={movie.id} />}
        </Route>

        <Route path={`${path}/reviews`}>
          {movie && <MovieReviews id={movie.id} />}
        </Route>
      </Suspense>
    </>
  );
}
