import React, { useState, useEffect } from 'react';
import moviesAPI from '../services/movies-api';
import MovieList from '../components/MovieList';
import Loader from '../components/Loader';
import ErrorView from './ErrorView';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function HomeView() {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    moviesAPI
      .getTrendingData()
      .then(data => {
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

export default HomeView;

// showTrendingMovies = () => {
//   this.setState({ status: Status.PENDING });
//   moviesAPI
//     .getTrendingData()
//     .then(data => {
//       console.log(data);
//       this.setState({ movies: data.results, status: Status.RESOLVED });
//     })
//     .catch(error => this.setState({ status: Status.REJECTED }));
// };

//     {movies && activePage === 'home' && status === Status.PENDING && (
//       <Loader />
//     )}
//     {movies && activePage === 'home' && status === Status.RESOLVED && (
//       <MovieListView
// movies={movies}
// title="Trending today"
//         getMovieId={this.getMovieId}
//       />
//     )}
