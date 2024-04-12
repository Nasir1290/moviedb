"use client";
import Link from "next/link";


import { useParams } from "next/navigation"


function MovieNotFoundPage() {

    const {id} = useParams();

    console.log(id)
    
  return (
    <div className=" text-center text-red-500 font-bold flex flex-col">
      OOPS !! Movie with <span className=" text-green-500">👉{id}👈</span> this id was not Found !!
      <Link href="/">
        <button className=" bg-purple-500 font-bold px-3 py-2 text-white rounded-lg mt-4">Back Home</button>
      </Link>
    </div>
  )
}

export default MovieNotFoundPage
