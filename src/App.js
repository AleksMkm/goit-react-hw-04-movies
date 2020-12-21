import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container';
import Header from './components/Header';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import ErrorView from './views/ErrorView';
import MovieDetailsView from './views/MovieDetailsView';
// import MovieListView from './components/MovieListView';
// import moviesAPI from './services/movies-api';
// import SearchForm from './components/SearchForm';
// import Loader from './components/Loader';
// import errorPlaceholder from './images/errorPlaceholder.jpg';
// import MovieCard from './components/MovieCard';

// const INITIAL_STATE = {
//   activePage: 'home',
//   searchQuery: '',
//   movies: null,
//   movieDetails: null,
//   movieId: '',
// };

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

function App() {
  // state = {
  //   ...INITIAL_STATE,
  //   status: Status.IDLE,
  // };

  return (
    <Container>
      <Header />

      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/movies" exact>
          <MoviesView />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsView />
        </Route>

        <Route>
          <ErrorView />
        </Route>
      </Switch>

      <ToastContainer autoClose={3000} />
    </Container>
  );

  // componentDidMount() {
  //   if (this.state.activePage === 'home') {
  //     this.showTrendingMovies();
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const prevQuery = prevState.searchQuery;
  //   const nextQuery = this.state.searchQuery;
  //   const prevPage = prevState.activePage;
  //   const nextPage = this.state.activePage;
  //   const prevId = prevState.movieId;
  //   const nextId = this.state.movieId;

  //   if (prevQuery !== nextQuery && nextPage === 'movies') {
  //     this.showSearchResults(nextQuery);
  //   }

  //   if (prevPage !== nextPage && nextPage === 'home') {
  //     this.showTrendingMovies();
  //     this.setState({ searchQuery: '' });
  //   }

  //   if (prevId !== nextId) {
  //     this.handleOpeningOfMovieCard(nextId);
  //   }
  // }

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

  // showSearchResults = nextQuery => {
  //   this.setState({ status: Status.PENDING });
  //   moviesAPI
  //     .getSearchData(nextQuery)
  //     .then(data => {
  //       console.log(data);
  //       if (data.total_results === 0) {
  //         this.setState({ status: Status.REJECTED });
  //         return;
  //       }
  //       this.setState({ movies: data.results, status: Status.RESOLVED });
  //     })
  //     .catch(error => this.setState({ status: Status.REJECTED }));
  // };

  // handleNav = nextPage => {
  //   this.setState({ activePage: nextPage, movies: null });
  // };

  // getSearchQuery = query => {
  //   this.setState({ searchQuery: query });
  // };

  // getMovieId = e => {
  //   this.setState({ movieId: e.target.dataset.id });
  // };

  // handleOpeningOfMovieCard = nextId => {
  //   this.setState({ status: Status.PENDING });
  //   moviesAPI
  //     .getMovieById(nextId)
  //     .then(data => {
  //       console.log(data);
  //       // if (data.status_code === 34) {
  //       //   this.setState({ status: Status.REJECTED });
  //       //   return;
  //       // }
  //       this.setState({
  //         activePage: 'moviecard',
  //         movieDetails: data,
  //         status: Status.RESOLVED,
  //       });
  //     })
  //     .catch(error => this.setState({ status: Status.REJECTED }));
  // };

  // render() {
  //   const {
  //     movies,
  //     activePage,
  //     searchQuery,
  //     status,
  //     movieDetails,
  //   } = this.state;

  // return (
  //   <Container>
  //     <Header changeView={this.handleNav} currentPage={activePage} />

  //     {movies && activePage === 'home' && status === Status.PENDING && (
  //       <Loader />
  //     )}
  //     {movies && activePage === 'home' && status === Status.RESOLVED && (
  //       <MovieListView
  //         movies={movies}
  //         title="Trending today"
  //         getMovieId={this.getMovieId}
  //       />
  //     )}

  //     {activePage === 'movies' && (
  //       <SearchForm getSearchQuery={this.getSearchQuery} />
  //     )}

  //     {searchQuery &&
  //       movies &&
  //       activePage === 'movies' &&
  //       status === Status.PENDING && <Loader />}
  //     {searchQuery &&
  //       movies &&
  //       activePage === 'movies' &&
  //       status === Status.RESOLVED && (
  //         <MovieListView
  //           movies={movies}
  //           title="Search results:"
  //           getMovieId={this.getMovieId}
  //         />
  //       )}
  //     {activePage === 'movies' && status === Status.REJECTED && (
  //       <div>
  //         <p style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '700' }}>
  //           No movies for `${searchQuery} query. Please search for something
  //           else!`
  //         </p>
  //         <img
  //           style={{ width: '500px' }}
  //           src={errorPlaceholder}
  //           alt="error"
  //         />
  //       </div>
  //     )}

  //     {movieDetails && activePage === 'moviecard' && (
  //       <MovieCard movie={movieDetails} />
  //     )}

  //     <ToastContainer autoClose={3000} />
  //   </Container>
  // );
  // }
}

export default App;
