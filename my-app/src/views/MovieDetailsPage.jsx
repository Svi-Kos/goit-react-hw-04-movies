import React, { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import * as API from '../services/movies-api';
import MovieCard from 'components/MovieCard/Moviecard';
// import Cast from './Cast';
// import Reviews from './Reviews';
import s from './viewsStyles.module.css';

const Cast = lazy(() =>
  import('components/Cast/Cast' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('components/Reviews/Reviews' /* webpackChunkName: "reviews" */),
);

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    API.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  function goPreviousPage() {
    history.push(location?.state?.from ?? '/movies');
  }

  return (
    <div>
      <button type="button" className={s.goBackBtn} onClick={goPreviousPage}>
        ← Go back
      </button>
      {movie && (
        <>
          <MovieCard movie={movie} />
          <hr />
          <h5>Additional Information</h5>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/cast`,
                  state: { from: location?.state?.from ?? '/movies' },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: location?.state?.from ?? '/movies' },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <hr />
          <Suspense
            fallback={
              <Loader type="Hearts" color="#2196f3" height={80} width={80} />
            }
          >
            <Route path={`${path}/cast`}>
              <Cast />
            </Route>
            <Route path={`${path}/reviews`}>
              <Reviews />
            </Route>
          </Suspense>
        </>
      )}
    </div>
  );
}

export default MovieDetailsPage;
