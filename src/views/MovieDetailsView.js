import React, { useState, useEffect } from 'react';
import { Route, useParams, useRouteMatch } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import moviesAPI from '../services/movies-api';
import MovieCard from '../components/MovieCard';
import MovieCast from '../components/MovieCast';
import MovieReviews from '../components/MovieReviews';
import Loader from '../components/Loader';
import ErrorView from './ErrorView';
import Button from '../components/Button';

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
  const { movieId } = useParams();
  const { path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  console.log(history);
  console.log(`location at view:`);
  console.log(location);

  const locationOfOrigin = location.state.pathname;
  console.log(`locationOfOrigin: ${locationOfOrigin}`);

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

  const goBack = () => {};

  return (
    <>
      <div style={{ width: '100%' }}>
        <Button handleClick={goBack} />
      </div>

      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED && <MovieCard movie={movie} />}
      {status === Status.REJECTED && <ErrorView title={error.message} />}

      <Route path={`${path}/cast`}>
        {movie && <MovieCast id={movie.id} />}
      </Route>

      <Route path={`${path}/reviews`}>
        {movie && <MovieReviews id={movie.id} />}
      </Route>
    </>
  );
}
