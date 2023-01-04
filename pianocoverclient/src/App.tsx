import React from "react";
import "./App.css";
import { InitVideoPlayer } from "./ReactPlayer/VideoPlayer";
import { SideBar } from "./Sidebar/Sidebar";
import { Carousel } from 'react-responsive-carousel';

function App() {
  const urls = ["1", "2"]
  const renderVideoPlayers = urls.map((item) => {
    const videoplayer = InitVideoPlayer(item)
    return <div>
      {videoplayer}
    </div>
  })
  return (
    <>
      <div className="h-full overflow-auto">
        <SideBar />
        <div className="flex place-content-center mt-4">
          <Carousel>
            {renderVideoPlayers}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default App;
