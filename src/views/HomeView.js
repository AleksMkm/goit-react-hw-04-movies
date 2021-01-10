import React from 'react';
import { useQuery } from 'react-query';
import moviesAPI from '../services/movies-api';
import MovieList from '../Components/MovieList';
import Loader from '../Components/Loader';
import ErrorView from './ErrorView';

export default function HomeView() {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    'trendingMovies',
    moviesAPI.getTrendingData,
  );

  console.log(data);

  return (
    <>
      {isLoading && <Loader />}
      {isSuccess && <MovieList movies={data.results} title="Trending today" />}
      {isError && <ErrorView title={error.message} />}
    </>
  );
}
