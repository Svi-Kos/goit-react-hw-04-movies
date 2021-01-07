import { useParams, NavLink, useRouteMatch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from '../services/movies-api';
import Cast from './Cast';
import Reviews from './Reviews';
import s from './viewsStyles.module.css';

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
          <div className={s.movieInfo}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              width="200"
            />
            <div className={s.generalInfo}>
              <h2>
                {movie.original_title} ({movie.release_date.split('-')[0]})
              </h2>
              <p>User Score: {movie.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
            </div>
          </div>
          <hr />
          <h5>Additional Information</h5>
          <ul>
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
          <hr />
          <Route path="/movies/:movieId/cast">
            <Cast />
          </Route>

          <Route path="/movies/:movieId/reviews">
            <Reviews />
          </Route>
        </>
      )}
    </div>
  );
}

export default MovieDetailsPage;
