import React from "react";
import MovieCard from "./MovieCard";
import movieData from "../data/movieData.json";

const Movies = () => {
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {
            <MovieCard
             />}
      </div>
    </div>
  );
};

export default Movies;
