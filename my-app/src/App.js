import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import HomeView from '../src/views/HomeView';
import MoviesPage from '../src/views/MoviesPage';

function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/movies">
          <MoviesPage />
        </Route>

        <Route>
          <HomeView />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
