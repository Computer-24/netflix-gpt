import {useDispatch} from "react-redux";
import {API_OPTIONS, TMDB_BASE_URL} from "../utils/constants.js";
import {addNowPlayingMovies} from "../utils/moviesSlice.js";
import {useEffect} from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch(TMDB_BASE_URL, API_OPTIONS)
        const moviesData = await data.json();
        dispatch(addNowPlayingMovies(moviesData.results));
    }
    useEffect(() => {
        getNowPlayingMovies();
    }, [])

}
export default useNowPlayingMovies