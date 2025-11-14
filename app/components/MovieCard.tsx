'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/types/movie';

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movie/${movie.imdbID}`}>
      <div className="min-w-[120px] cursor-pointer">
        <Image
          src={movie.Poster !== 'N/A' ? movie.Poster : '/default.jpg'}
          alt={movie.Title}
          width={160}
          height={240}
          className="rounded"
        />
        <div className="text-xs mt-1 text-center">{movie.Title}</div>
      </div>
    </Link>
  );
}
