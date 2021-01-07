import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../services/movies-api';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  // передати запит у фетч
  useEffect(() => {
    API.fetchMovieByQuery().then(moviesArr => {
      setMovies(moviesArr.results);
    });
  }, []);

  return (
    <>
      <form>
        <input type="text" />
        <button type="button">Search</button>
      </form>

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.name ?? movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MoviesPage;
