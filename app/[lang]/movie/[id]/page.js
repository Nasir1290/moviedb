
import MovieDetails from "@/components/MovieDetails"

const InterceptingMovieDetailsPage = ({params:{id,lang}}) => {
  return (
    <section>
      <MovieDetails id={id} lang={lang}/>
    </section>
  )
}

export default InterceptingMovieDetailsPage;
