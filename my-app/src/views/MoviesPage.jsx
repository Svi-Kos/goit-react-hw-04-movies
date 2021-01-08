import { useState, useEffect } from 'react';
import * as API from '../services/movies-api';
import MoviList from '../components/MovieList/MoviList';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  // передати запит у фетч

  useEffect(() => {
    API.fetchMovieByQuery().then(moviesArr => {
      setMovies(moviesArr.results);
    });
  }, []);

  function handleSubmit(e) {
    console.log(e.target);
  }

  return (
    <>
      <form>
        <input type="text" onChange={handleSubmit} />
        <button type="button">Search</button>
      </form>

      {movies && <MoviList movies={movies} />}
    </>
  );
}

export default MoviesPage;
