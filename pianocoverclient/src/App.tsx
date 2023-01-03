import React from "react";
import "./App.css";
import { VideoPlayer } from "./ReactPlayer/VideoPlayer";
import { SideBar } from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="text-center">
      <SideBar></SideBar>
      <div className="align-middle">
        <VideoPlayer></VideoPlayer>
      </div>
    </div>
  );
}

export default App;
