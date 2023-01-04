import React from "react";
import ReactPlayer from "react-player";

export const InitVideoPlayer = (url: string) => {
  return (
    <>
      <ReactPlayer
        url={url}
        width="40%"
        playing={false}
        controls={true}
      />
    </>
  );
};
