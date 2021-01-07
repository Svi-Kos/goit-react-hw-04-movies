const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '14d97542ae4a62e821967220e1ab473a';

async function fetchMovies(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendMoviesByDay() {
  return fetchMovies(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
}

export function fetchMovieById(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`,
  );
}

export function fetchCastInfo(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
  );
}

export function fetchReviews(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`,
  );
}

export function fetchMovieByQuery() {
  return fetchMovies(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=batman&page=1&include_adult=false`,
  );
}
