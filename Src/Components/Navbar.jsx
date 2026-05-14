export default function Navbar() {
  return (
    <nav className="bg-black text-white p-5 flex justify-between">
      <h1 className="text-2xl font-bold text-red-600">
        MovieApp
      </h1>

      <ul className="flex gap-5">
        <li>Home</li>
        <li>Movies</li>
        <li>TV Shows</li>
      </ul>
    </nav>
  );
}