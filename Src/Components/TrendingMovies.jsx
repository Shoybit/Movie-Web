"use client";

import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/tmdb";
import Link from "next/link";

export default function TrendingMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data.results);
    };

    getMovies();
  }, []);

  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
            🔥 Trending Movies 
          </h2>
          <a href="#" className="text-red-500 hover:text-red-400 text-sm font-medium">
            View All →
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
{movies.slice(0, 10).map((movie) => (
  <Link href={`/movie/${movie.id}`} key={movie.id}>

    <div className="group cursor-pointer">

      <div className="relative overflow-hidden rounded-lg">

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">

          <button className="w-full bg-red-600 text-white py-1 rounded text-sm font-semibold">
            Watch Now
          </button>

        </div>

      </div>

      <h3 className="mt-2 text-sm font-medium truncate">
        {movie.title}
      </h3>

      <p className="text-xs text-gray-400">
        {movie.vote_average?.toFixed(1)} ⭐
      </p>

    </div>

  </Link>
))}
        </div>
      </div>
    </section>
  );
}