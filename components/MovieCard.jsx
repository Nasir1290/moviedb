import Image from "next/image";
import Link from "next/link";
import React from "react";
import {getGenreNames} from "@/utils/utils.js";
import { getDictionary } from "@/app/[lang]/dictionaries";


const MovieCard = async({movieData,lang}) => {

  const dict = await getDictionary(lang);

  // random rating
  function generateRandomRating() {
    return Math.floor(Math.random() * 3) + 3; 
  }

  let randomRating = generateRandomRating();

  return (
    <figure className="p-4 border  shadow-sm border-white/10 rounded-xl">
      <Image
        className="w-full object-cover"
        src={`${movieData.poster_path}`}
        alt=""
        width={1000}
        height={1000}
      />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{movieData.title}</h3>

        <p className="text-[#575A6E] text-sm mb-2">{getGenreNames(movieData.genre_ids)}</p>

        <div className="flex items-center space-x-1 mb-5">
          {[...Array(Math.floor(randomRating))].map((_, index) => (
            <Image
              src="/star.svg"
              width={14}
              key={index + 1}
              height={14}
              alt=""
            />
          ))}

          {[...Array(Math.floor(5 - randomRating))].map((_, index) => (
            <Image
              src="/star-rating-white.png"
              key={index + 2}
              width={15}
              height={15}
              alt=""
            />
          ))}
        </div>
        <Link
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href={`/movie/${movieData.id}`}
        >
          <Image src="/tag.svg" alt="" height={10} width={20} />
          <span>{dict.details}</span>
        </Link>
      </figcaption>
    </figure>
  );
};

export default MovieCard;
