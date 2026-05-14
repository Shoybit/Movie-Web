"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/tmdb";

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
    <section className="bg-black text-white p-10">
      <h2 className="text-3xl font-bold mb-5">
        Trending Movies
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <div className="cursor-pointer hover:scale-105 transition">

              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-xl"
              />

              <h3 className="mt-2 text-sm">
                {movie.title}
              </h3>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}