import { movieData } from "@/app/[lang]/dictionaries";



const genres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" }
];

// Function to get genre names based on IDs
export function getGenreNames(genreIds) {
    const genreNames = genreIds.map(genreId => {
        const genre = genres.find(g => g.id === genreId);
        return genre ? genre.name : "Unknown";
    });

    return genreNames.join(" / ");
}


export async function getMovieById (movieId) {

    const allMovieData = await movieData();
    
    const findMovie = allMovieData.find(m => m.id === parseInt(movieId));
    return findMovie;
}

