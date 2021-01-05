import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../services/movies-api';

function HomeView() {
  const [movies, setMovies] = useState([]);
  // const { url } = useRouteMatch();

  useEffect(() => {
    API.fetchTrendMoviesByDay().then(moviesArr => {
      setMovies(moviesArr.results);
    });
  }, []);

  return (
    <>
      <h2>Trending today</h2>

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

export default HomeView;
