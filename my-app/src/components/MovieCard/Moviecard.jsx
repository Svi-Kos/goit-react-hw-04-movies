import s from 'components/MovieCard/MovieCard.module.css';

function MovieCard({ movie }) {
  return (
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
  );
}

export default MovieCard;
