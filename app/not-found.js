"use client"

import Link from "next/link"
import { useParams } from "next/navigation"


const RootNotFoundPage = () => {
    const params = useParams();
    return (
        <div className=" flex flex-col justify-center items-center mt-32">
            <h2 className=" m-auto text-center text-red-500 mb-2">
                Page Not Found 👉 {params} 👈
            </h2>
            <Link href="/">
                <button className=" px-3 py-2 bg-purple-500 text-white font-bold rounded-md">
                    Home
                </button>
            </Link>
        </div>
    )
}

export default RootNotFoundPage
