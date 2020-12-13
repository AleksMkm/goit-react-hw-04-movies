import React, { Component } from 'react';
import Container from './Components/Container';
import Header from './Components/Header';
import MovieListView from './Components/MovieListView';
import moviesAPI from './services/movies-api';

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
    this.setState({ status: Status.PENDING });
    moviesAPI.getTrendingData().then(data => {
      console.log(data);
      this.setState({ movies: data.results, status: Status.RESOLVED });
    });
    console.log('mounted');
  }

  handleNav = nextPage => {
    this.setState({ activePage: nextPage });
  };

  render() {
    const { movies, activePage } = this.state;

    return (
      <Container>
        <Header changeView={this.handleNav} />
        {movies && activePage === 'home' && (
          <MovieListView movies={movies} title="Trending today" />
        )}
      </Container>
    );
  }
}

export default App;
