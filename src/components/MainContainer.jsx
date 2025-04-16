import React from 'react';
import VideoTitle from "./VideoTitle.jsx";
import VideoBackground from "./VideoBackground.jsx";
import {useSelector} from "react-redux";

const MainContainer = () => {
    const movies = useSelector((state) => state.movies.nowPlayingMovies);
    if (!movies) return
    const mainMovie = movies[0]
    const {id, overview, original_title} = mainMovie

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id}/>
        </div>
    );
};

export default MainContainer;