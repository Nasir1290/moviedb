


import MovieDetails from "@/components/MovieDetails"

const MovieDetailsPage = ({params:{id,lang}}) => {
  return (
    <section className=" ">
      <MovieDetails id={id} lang={lang}/>
    </section>
  )
}

export default MovieDetailsPage
