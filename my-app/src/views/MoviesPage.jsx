import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as API from '../services/movies-api';
import MoviList from '../components/MovieList/MoviList';
import Form from 'components/Form/Form';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    API.fetchMovieByQuery(query).then(moviesArr => {
      setMovies(moviesArr.results);
    });
  }, [query]);

  function showMoviesByQuery(query) {
    setQuery(query);

    history.push({
      ...location,
      search: `query=${query}`,
    });
  }

  const routeQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    routeQuery && setQuery(routeQuery);
  }, [routeQuery]);

  return (
    <>
      <Form onSubmit={showMoviesByQuery} />
      {movies && <MoviList movies={movies} />}
    </>
  );
}

export default MoviesPage;
