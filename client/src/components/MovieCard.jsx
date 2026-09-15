import React from "react";
import { StarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import timeFormat from "../lib/timeFormat";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  if (!movie) return null;

  const handleNavigate = () => {
    navigate(`/movies/${movie.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-65">
      <img
        onClick={handleNavigate}
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
            : "/placeholder.jpg"
        }
        alt={movie.title}
        className="rounded-lg h-52 w-full object-cover object-center cursor-pointer"
      />

      <p className="font-semibold mt-2 truncate">{movie.title}</p>

      <p className="text-sm text-gray-400 mt-2">
        {movie.release_date
          ? new Date(movie.release_date).getFullYear()
          : "N/A"}
        {" • "}
        {(movie.genres ?? [])
          .slice(0, 2)
          .map((genre) => genre.name)
          .join(" | ") || "Unknown"}
        {" • "}
        {movie.runtime ? timeFormat(movie.runtime) : "N/A"}
      </p>

      <div className="flex items-center justify-between mt-4 pb-3">
        <button
          onClick={handleNavigate}
          className="px-4 py-2 text-xs bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer"
        >
          Buy Tickets
        </button>

        <p className="flex items-center gap-1 text-sm text-gray-400">
          <StarIcon className="w-4 h-4 text-primary fill-primary" />
          {movie.vote_average ? movie.vote_average.toFixed(1) : "0.0"}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;