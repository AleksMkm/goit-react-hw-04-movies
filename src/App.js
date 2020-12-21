import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container';
import Header from './components/Header';
import HomeView from './views/HomeView';
import SearchMoviesView from './views/MoviesView';
import ErrorView from './views/ErrorView';
import MovieDetailsView from './views/MovieDetailsView';

function App() {
  return (
    <Container>
      <Header />

      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/movies" exact>
          <SearchMoviesView />
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
}

export default App;
