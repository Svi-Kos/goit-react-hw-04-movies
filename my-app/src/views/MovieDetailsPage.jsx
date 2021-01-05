import { useParams, Link, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from '../services/movies-api';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const { url } = useRouteMatch();

  useEffect(() => {
    API.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    // винести як ел-т MovieCard
    <div>
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
            width="200"
          />
          <h2>
            {movie.original_title} ({movie.release_date.split('-')[0]})
          </h2>
          <p>User Score: {movie.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
          <h5>Additional Information</h5>
          <ul>
            <li>
              <Link to={`${url}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${url}/reviews`}>Reviews</Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}

export default MovieDetailsPage;
