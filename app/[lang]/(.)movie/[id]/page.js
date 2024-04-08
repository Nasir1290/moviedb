

import Modal from "@/components/Modal"
import MovieDetails from "@/components/MovieDetails"

const InterceptingMovieDetailsPage = ({params:{id,lang}}) => {
  return (
    <Modal>
      <MovieDetails id={id} lang={lang}/>
    </Modal>
  )
}

export default InterceptingMovieDetailsPage
