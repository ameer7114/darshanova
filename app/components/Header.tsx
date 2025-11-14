'use client';
export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center sticky top-0 z-10">
      <div
   className="inline-block font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl text-white px-4 py-1 rounded"
  style={{
    background: "linear-gradient(to right, red 0%, red 50%, navy 50%, navy 100%)"
  }}
>
  Darshanova Movies
</div>

      <nav>
        <a href="/" className="mr-4 hover:underline">Home</a>
      </nav>
    </header>
  );
}
