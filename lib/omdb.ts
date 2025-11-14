const BASE = 'https://www.omdbapi.com';
const API_KEY = process.env.OMDB_API_KEY;

export async function fetchMoviesBySearch(query: string, page: number = 1) {
  const res = await fetch(`${BASE}/?apikey=${API_KEY}&s=${query}&type=movie&page=${page}`);
  if (!res.ok) throw new Error('Failed to fetch movie list');
  return res.json();
}

export async function fetchMovieById(id: string) {
  const res = await fetch(`${BASE}/?apikey=${API_KEY}&i=${id}`);
  if (!res.ok) throw new Error('Failed to fetch movie details');
  return res.json();
}
