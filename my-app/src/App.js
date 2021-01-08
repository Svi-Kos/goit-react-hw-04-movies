import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
// import HomeView from '../src/views/HomeView';
// import MoviesPage from '../src/views/MoviesPage';
// import MovieDetailsPage from '../src/views/MovieDetailsPage';
//додає динамічний імпорт через lazy
const HomeView = lazy(() => import('views/HomeView'));
const MoviesPage = lazy(() => import('views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('views/MovieDetailsPage'));

function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<div>Wait...</div>}>
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

          <Route>
            <HomeView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
//14d97542ae4a62e821967220e1ab473a
