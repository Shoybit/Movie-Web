// Add these functions to your existing tmdb.js file

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMovieDetails(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data;
}

export async function fetchMovieVideos(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data;
}

export async function fetchMovieCredits(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data;
}

export async function fetchSimilarMovies(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await response.json();
  return data;
}

export async function fetchTrendingMovies() {
  const response = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data;
}