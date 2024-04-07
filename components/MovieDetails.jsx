import { getDictionary } from "@/app/[lang]/dictionaries";
import { getMovieById } from "@/utils/utils";
import Image from "next/image";

const MovieDetails = async ({ id, lang }) => {
  let movieData = await getMovieById(id);

  const dict = await getDictionary(lang);

  return (
    <>
      <div>
        <Image
          className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
          src={`${movieData?.backdrop_path}`}
          alt=""
          width={3000}
          height={3000}
        />
      </div>
      <div className="grid grid-cols-12 py-12 gap-8">
        <div className="col-span-2">
          <Image
            src={`${movieData?.poster_path}`}
            alt=""
            width={1000}
            height={1000}
          />
        </div>
        <div className="col-span-8">
          <h2 className="font-bold text-slate-300 text-2xl">
            {movieData?.title}
          </h2>
          <p className="my-2 text-slate-400 italic">{movieData?.overview}</p>
          <ul className="text-slate-300 space-y-2 my-8">
            <li>
              {dict.releaseDate} : {movieData?.release_date}
            </li>
            <li>
              {dict.averageVote} : {movieData?.vote_average}
            </li>
            <li>
              {dict.voteCount} : {movieData?.vote_count}
            </li>
            <li>
              {dict.popularity} : {movieData?.popularity}
            </li>
          </ul>
        </div>
        <div className="col-span-2 space-y-4">
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {dict.streamInHD}
          </button>
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {dict.downloadInHd}
          </button>
        </div>
      </div>
    </>


  );
};

export default MovieDetails;
