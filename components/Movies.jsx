import React from "react";
import MovieCard from "./MovieCard";
import {movieData} from "@/app/[lang]/dictionaries.js";

const Movies =async ({lang}) => {
  const allMovieData = await movieData();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {allMovieData.map((movieData) => (
          <MovieCard key={movieData.id} movieData ={movieData} lang={lang}/>
        ))
            }
      </div>
    </div>
  );
};

export default Movies;
