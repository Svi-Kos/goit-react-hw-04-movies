import { useState, useEffect } from 'react';
import * as API from '../services/movies-api';
import MoviList from '../components/MovieList/MoviList';

function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.fetchTrendMoviesByDay().then(moviesArr => {
      setMovies(moviesArr.results);
    });
  }, []);

  return (
    <>
      <h2>Trending today</h2>

      {movies && <MoviList movies={movies} />}
    </>
  );
}

export default HomeView;
