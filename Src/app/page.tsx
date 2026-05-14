import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrendingMovies from "../components/TrendingMovies";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar></Navbar>
      <Hero></Hero>
      <TrendingMovies></TrendingMovies>
    </main>
  );
}
