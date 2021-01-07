import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../services/movies-api';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState('');
  //   const { url } = useRouteMatch();
  console.log(reviews);
  useEffect(() => {
    API.fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      {/* {!reviews && <p>We don't have any reviews for this movie.</p>} */}
      {reviews && (
        <ul>
          {reviews.results.map(review => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Reviews;
