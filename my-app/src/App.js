import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import HomeView from '../src/views/HomeView';
import MoviesPage from '../src/views/MoviesPage';
import MovieDetailsPage from '../src/views/MovieDetailsPage';

function App() {
  return (
    <Container>
      <AppBar />
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
    </Container>
  );
}

export default App;
//14d97542ae4a62e821967220e1ab473a
