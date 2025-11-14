import Image from 'next/image';
import { Movie } from '@/types/movie';
export default function HeroBanner({ movie }: { movie: Movie }) {
  return (
    <section className="relative h-24 md:h-36 z-0">
      <Image src={movie.Poster !== 'N/A' ? movie.Poster! : '/default.jpg'} alt={movie.Title} fill priority style={{ objectFit: 'contain' }} />
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 p-3 rounded">
        <h2 className="text-2xl font-bold text-white">{movie.Title}</h2>
        <p className="text-white text-sm">{movie.Year}</p>
      </div>
    </section>
  );
}
