import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../services/movies-api';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState('');
  //   const { url } = useRouteMatch();

  useEffect(() => {
    API.fetchCastInfo(movieId).then(setCast);
  }, [movieId]);
  //якщо нема фото, показати зарезервоване
  return (
    <div>
      {cast && (
        <ul>
          {cast.cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                width="100"
              />
              <p>{actor.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cast;
