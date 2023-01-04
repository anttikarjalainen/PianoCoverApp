import React from "react";
import ReactPlayer from "react-player";

export const InitVideoPlayer = (url: string, key: number) => {
  return (
    <>
      <ReactPlayer
        url={url}
        width="100%"
        playing={false}
        controls
        key={key}
        light="https://cdn.pixabay.com/photo/2016/11/21/17/39/piano-1846719_1280.jpg"
      />
    </>
  );
};
