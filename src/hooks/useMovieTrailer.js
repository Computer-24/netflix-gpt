import {useDispatch} from "react-redux";
import {API_OPTIONS} from "../utils/constants.js";
import {addRandomMovie} from "../utils/moviesSlice.js";
import {useEffect} from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const movieTrailerData = await data.json();
        const trailerSearch = movieTrailerData?.results?.filter(trailer => trailer.type === "Trailer");
        const movie = trailerSearch.length > 0 ? trailerSearch[0] : movieTrailerData?.results[0];
        dispatch(addRandomMovie(movie));
    }
    useEffect(() => {
        getMovieTrailer()
    }, [])
}

export default useMovieTrailer;