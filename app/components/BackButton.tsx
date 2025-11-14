'use client';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="bg-gray-200 hover:bg-gray-300 text-black py-1 px-3 mb-4 rounded"
    >
      ← Back
    </button>
  );
}
