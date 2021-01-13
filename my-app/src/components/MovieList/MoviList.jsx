import { Link, useLocation } from 'react-router-dom';

function MoviList({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={{ pathname: `/movies/${movie.id}`, state: { from: location } }}
          >
            {movie.name ?? movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MoviList;
