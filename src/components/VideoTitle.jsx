import React from 'react';

const VideoTitle = ({overview, title}) => {
    return (
        <div className={"w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black"}>
            <h1 className={"text-6xl font-bold"}>{title}</h1>
            <p className={"py-6 text-lg w-1/2"}>{overview}</p>
            <div>
                <button className={"bg-white text-black p-4 px-12 text-xl rounded-sm hover:opacity-80"}>▶️Play</button>
                <button className={"bg-gray-500 mx-2 text-white p-4 px-12 text-xl opacity-50 rounded-sm"}>More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;