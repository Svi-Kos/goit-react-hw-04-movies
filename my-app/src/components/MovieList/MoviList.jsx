import { Link } from 'react-router-dom';

function MoviList({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.name ?? movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default MoviList;
