import react from "react";
import ReactPlayer from "react-player";

export const VideoPlayer = () => {
  return (
    <>
      <ReactPlayer
        url="add video url here from public folder"
        width="30%"
        height="50%"
        playing={false}
        controls={true}
      />
      ;
    </>
  );
};
