import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './Components/Container';
import Header from './Components/Header';
import MovieListView from './Components/MovieListView';
import moviesAPI from './services/movies-api';
import SearchForm from './Components/SearchForm';

const INITIAL_STATE = {
  activePage: 'home',
  searchQuery: '',
  movies: null,
};

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class App extends Component {
  state = {
    ...INITIAL_STATE,
    status: Status.IDLE,
  };

  componentDidMount() {
    if (this.state.activePage === 'home') {
      this.showTrendingMovies();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPage = prevState.activePage;
    const nextPage = this.state.activePage;

    if (prevQuery !== nextQuery && nextPage === 'movies') {
      this.setState({ status: Status.PENDING });
      moviesAPI.getSearchData(nextQuery).then(data => {
        this.setState({ movies: data.results, status: Status.RESOLVED });
      });
    }

    if (prevPage !== nextPage && nextPage === 'home') {
      this.showTrendingMovies();
      this.setState({ searchQuery: '' });
    }
  }

  showTrendingMovies = () => {
    this.setState({ status: Status.PENDING });
    moviesAPI.getTrendingData().then(data => {
      console.log(data);
      this.setState({ movies: data.results, status: Status.RESOLVED });
    });
  };

  handleNav = nextPage => {
    this.setState({ activePage: nextPage, movies: null });
  };

  getSearchQuery = query => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { movies, activePage, searchQuery } = this.state;

    return (
      <Container>
        <Header changeView={this.handleNav} />
        {movies && activePage === 'home' && (
          <MovieListView movies={movies} title="Trending today" />
        )}
        {activePage === 'movies' && (
          <SearchForm getSearchQuery={this.getSearchQuery} />
        )}
        {searchQuery && movies && activePage === 'movies' && (
          <MovieListView movies={movies} title="Search results:" />
        )}
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}

export default App;
