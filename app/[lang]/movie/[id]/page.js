// use client
"use-client"

import MovieDetails from "@/components/MovieDetails"

const page = ({params:{id,lang}}) => {
  return (
    <div>
      <MovieDetails id={id} lang={lang}/>
    </div>
  )
}

export default page
