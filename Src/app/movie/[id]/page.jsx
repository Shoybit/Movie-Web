import {
  fetchMovieDetails,
  fetchMovieVideos,
} from "../../../services/tmdb";

export default async function MoviePage({ params }) {

  const { id } = await params;

  const movie = await fetchMovieDetails(id);

  const videos = await fetchMovieVideos(id);

  const trailer =
    videos?.results?.find(
      (video) => video.type === "Trailer"
    ) || null;

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="w-full h-[500px] object-cover rounded-2xl mb-10"
      />

      <h1 className="text-5xl font-bold mb-5">
        {movie.title}
      </h1>

      <p className="text-gray-400 max-w-3xl mb-8">
        {movie.overview}
      </p>

      {trailer ? (
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title="Trailer"
          allowFullScreen
          className="rounded-2xl"
        />
      ) : (
        <p>Trailer not available.</p>
      )}

    </div>
  );
}