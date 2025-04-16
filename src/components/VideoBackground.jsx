import React from 'react';
import {useSelector} from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer.js";

const VideoBackground = ({movieId}) => {
    const randomMovie = useSelector(state => state.movies.randomMovie);

    useMovieTrailer(movieId)

    return (
        <div>
            <iframe
                className={"w-screen aspect-video"}
                src={`https://www.youtube.com/embed/${randomMovie?.key}?autoplay=1&loop=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>
        </div>);
};

export default VideoBackground;