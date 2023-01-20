import React from "react";
import "./App.css";
import UseCsData from "./Hooks/useCsData";
import { InitVideoPlayer } from "./ReactPlayer/VideoPlayer";
import { SideBar } from "./Sidebar/Sidebar";

function App() {
  const { data, loading, error } = UseCsData();
  console.log(data);
  const urls = [
    "https://www.youtube.com/watch?v=nqmvMIZCkZ4",
    "https://www.youtube.com/watch?v=nqmvMIZCkZ4",
  ];
  const renderVideoPlayers = urls.map((item, i) => {
    const videoplayer = InitVideoPlayer(item, i);
    return (
      <div>
        Vid: {i}
        {videoplayer}
      </div>
    );
  });
  return (
    <>
      <div className="h-full overflow-auto">
        <SideBar />
        <div className="flex place-content-center mt-4">
          {/* <Carousel width={850}>{renderVideoPlayers}</Carousel> */}
        </div>
      </div>
    </>
  );
}

export default App;
