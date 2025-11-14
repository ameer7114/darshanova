import SearchBar from './components/SearchBar';
import MovieRow from './components/MovieRow';
import { fetchMoviesBySearch } from '@/lib/omdb';

export default async function HomePage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const params = await searchParams;
  const query = params.q?.trim();

 
  const homepageMovieData = await fetchMoviesBySearch('action', 1);
  const homepageMovies = homepageMovieData.Search || [];

 
  let movies: any[] = [];
  if (query) {
    const movieData = await fetchMoviesBySearch(query, 1);
    movies = movieData.Search || [];
  }

  return (
    <main className='p-4'>
      <h1 className="mb-4 text-2xl font-bold">Search your favourite movies</h1>
      <SearchBar />
      {}
      {!query && (
        <MovieRow movies={homepageMovies} categoryTitle="Popular Now" />
      )}
      {}
      {query && (
        movies.length > 0 ? (
          <MovieRow movies={movies} categoryTitle={`Results for "${query}"`} />
        ) : (
          <p className="text-gray-500">No results found.</p>
        )
      )}
    </main>
  );
}
