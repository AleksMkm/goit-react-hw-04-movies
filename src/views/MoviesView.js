import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import moviesAPI from '../services/movies-api';
import SearchForm from '../Components/SearchForm';
import MovieList from '../Components/MovieList';
import Loader from '../Components/Loader';
import ErrorView from './ErrorView';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function SearchMoviesView() {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  const history = useHistory();
  const location = useLocation();

  const searchQuery = new URLSearchParams(location.search).get('query') ?? '';

  const onSearchQueryChange = query => {
    history.push({ ...location, search: `query=${query}` });
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setStatus(Status.PENDING);
    moviesAPI
      .getSearchData(searchQuery)
      .then(data => {
        console.log(data.results);
        if (data.results.length === 0) {
          throw new Error(`No results for ${searchQuery}. Try another query.`);
        }
        setMovies(data.results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [searchQuery]);

  return (
    <>
      <SearchForm getSearchQuery={onSearchQueryChange} />
      {status === Status.PENDING && <Loader />}
      {searchQuery && status === Status.RESOLVED && (
        <MovieList
          movies={movies}
          title={`Search results for ${searchQuery}`}
        />
      )}
      {status === Status.REJECTED && <ErrorView title={error.message} />}
    </>
  );
}
