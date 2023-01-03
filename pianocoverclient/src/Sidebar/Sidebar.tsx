import React from "react";

export const SideBar = () => {
  return (
    //sidebarcontainer
    <div className="h-full w-48 bg-orange-900 fixed top-0 left-0 flex flex-col items-center justify-between pt-5 pr-0 text-white">
      {/* sidebarlinks */}
      <a
        href="/Home"
        className="no-underline text-base mt-3 mr-0 hover:text-[#ccc]"
      >
        Home
      </a>
      <a
        href="/Video"
        className="no-underline text-base mt-3 mr-0 hover:text-[#ccc]"
      >
        Vids
      </a>{" "}
      <a
        href="/Piano"
        className="no-underline text-base mt-3 mr-0 hover:text-[#ccc]"
      >
        Piano
      </a>
    </div>
  );
};
