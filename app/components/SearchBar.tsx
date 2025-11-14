'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [input, setInput] = useState('');

  useEffect(() => {
    const q = searchParams.get('q') || '';
    setInput(q);
  }, [searchParams]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push(input ? `/?q=${encodeURIComponent(input)}` : '/');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-stretch gap-2 mb-6 px-2 md:px-4"
    >
      <label htmlFor="movie-search" className="sr-only mr-1">Search movies</label>
      <input
        id="movie-search"
        type="text"
        placeholder="Search movies..."
        value={input}
        onChange={e => setInput(e.target.value)}
        className="border rounded px-2 py-1 flex-1"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white text-sm md:text-base px-4 py-2 rounded"
      >
        Search
      </button>
    </form>
  );
}
