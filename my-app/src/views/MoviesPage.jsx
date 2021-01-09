import { useState, useEffect } from 'react';
import * as API from '../services/movies-api';
import MoviList from '../components/MovieList/MoviList';
import Form from 'components/Form/Form';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }
    API.fetchMovieByQuery(query).then(moviesArr => {
      setMovies(moviesArr.results);
    });
  }, [query]);

  return (
    <>
      <Form onSubmit={setQuery} />
      {movies && <MoviList movies={movies} />}
    </>
  );
}

export default MoviesPage;
