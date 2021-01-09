import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../services/movies-api';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState('');

  useEffect(() => {
    API.fetchCastInfo(movieId).then(moviesArr => {
      setCast(moviesArr.cast);
    });
  }, [movieId]);

  return (
    <div>
      {cast && (
        <ul>
          {cast.slice(0, 10).map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${
                  actor.profile_path || '/gMWrKQjoTIpYjhc8SxZF20EDIES.jpg'
                }`}
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
