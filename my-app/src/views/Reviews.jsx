import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../services/movies-api';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.fetchReviews(movieId).then(moviesArr => {
      setReviews(moviesArr.results);
    });
  }, [movieId]);

  return (
    <div>
      {reviews && (
        <>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      {reviews.length === 0 && <p>We don't have any reviews for this movie.</p>}
    </div>
  );
}

export default Reviews;
