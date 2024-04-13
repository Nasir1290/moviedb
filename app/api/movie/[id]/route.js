import { findAllMovie, findMovieById, findMovieIndex, movieData } from "@/data/movieData";

export async function GET(request, { params }) {
    try {
        const { id } = params;

        if (!id) {
            return Response.json({ error: "Missing movie ID" }, { status: 400 }); //400 = bad request
        }

        const movie = findMovieById(id);

        if (!movie) {
            return Response.json({ error: "Movie not found" }, { status: 404 }); //404 =  not found
        }

        return Response.json(movie);

    } catch (error) {
        console.error(error);
        return Response.error("An internal server error occurred", { status: 500 });
    }
}


export async function PATCH(request, { params }) {
    try {
        const { id } = params;
        if (!id) {
            return Response.json({ error: "Missing movie ID" }, { status: 400 }); //400 = bad request
        }

        const movieIndex = findMovieIndex(id);
        if (!movieIndex) {
            return Response.json({ error: "Movie not found" }, { status: 404 }); //404 =  not found
        }

        let data = await request.json();

        const updatedMovie = { ...data, id: id };
        // update movie data 👇
        movieData[movieIndex] = updatedMovie;

        return Response.json(updatedMovie);

    } catch (error) {
        console.error(error);
        return Response.error("An internal server error occurred", { status: 500 });

    }

}



export async function DELETE(request, { params }) {

    try {

        const { id } = params;

        if (!id) {
            return new Response(JSON.stringify({ error: "Missing Movie Id" }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        const movieIndex = findMovieIndex(parseInt(id));

        if (movieIndex === -1) {
            return new Response(JSON.stringify({ error: "Movie not found" }), { status: 404, headers: { 'Content-Type': 'application/json' } });
        }

        const deletedMovie = movieData.splice(movieIndex, 1)[0]; // Remove 1 element at movieIndex and get the deleted movie
        return new Response(JSON.stringify(deletedMovie), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "An internal server error occurred" }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
