import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
// import HomeView from '../src/views/HomeView';
// import MoviesPage from '../src/views/MoviesPage';
// import MovieDetailsPage from '../src/views/MovieDetailsPage';

const HomeView = lazy(() =>
  import('views/HomeView' /* webpackChunkName: "home-view" */),
);
const MoviesPage = lazy(() =>
  import('views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import('views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */),
);

function App() {
  return (
    <Container>
      <AppBar />

      <Suspense
        fallback={
          <Loader type="Hearts" color="#2196f3" height={80} width={80} />
        }
      >
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
