
import Link from "next/link";


function RootNotFound() {
  
  return (
    <div className=" text-center text-red-500 font-bold flex flex-col">
      OOPS !! Your requested URL was not Found !!
      <Link href="/">
        <button className=" bg-purple-500 font-bold px-3 py-2 text-white rounded-lg mt-4">Back Home</button>
      </Link>
    </div>
  )
}

export default RootNotFound

