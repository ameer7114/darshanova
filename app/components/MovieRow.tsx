'use client';
import MovieCard from './MovieCard';
import { Movie } from '@/types/movie';

export default function MovieRow({ movies, categoryTitle }: { movies: Movie[]; categoryTitle: string }) {
  return (
    <section>
     <h3 className="text-base md:text-lg font-semibold ml-2 mb-2">{categoryTitle}</h3>
  <div className="flex flex-wrap items-center gap-3 py-4">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </section>
  );
}
