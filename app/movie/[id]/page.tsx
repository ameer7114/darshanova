import { fetchMovieById } from '@/lib/omdb';
import Image from 'next/image';
import BackButton from '../../components/BackButton';

export default async function MovieDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const movie = await fetchMovieById(id);
  return (
    <main className="max-w-2xl mx-auto py-6 ">
        <BackButton />
      <div className="flex flex-col justify-center items-center md:flex-col gap-4">
        <Image src={movie.Poster !== 'N/A' ? movie.Poster : '/default.jpg'} alt={movie.Title} width={240} height={360} />
        <div>
          <h1 className="text-2xl font-bold mb-2">{movie.Title}</h1>
          <p className="mb-2">{movie.Year} • {movie.Genre}</p>
          <p className="mb-4">{movie.Plot}</p>
          <ul className="text-sm">
            <li><strong>Released:</strong> {movie.Released}</li>
            <li><strong>Type:</strong> {movie.Type}</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
