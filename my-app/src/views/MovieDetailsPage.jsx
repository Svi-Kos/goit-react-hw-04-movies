import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  useHistory,
} from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import * as API from '../services/movies-api';
import MovieCard from 'components/MovieCard/Moviecard';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import Cast from './Cast';
// import Reviews from './Reviews';
import s from './viewsStyles.module.css';

const Cast = lazy(() => import('./Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "reviews" */),
);

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const { url, path } = useRouteMatch();
  const previousPage = useHistory();

  useEffect(() => {
    API.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  function goPreviousPage() {
    previousPage.goBack();
  }

  return (
    <div>
      <button className={s.goBackBtn} onClick={goPreviousPage}>
        ← Go back
      </button>
      {movie && (
        <>
          <MovieCard movie={movie} />
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
