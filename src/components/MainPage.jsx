import React, { useEffect, useState } from "react";
import { SiSpotify } from "react-icons/si";
import { useSongs } from "../context/SongContext";

const MainPage = () => {
  const { songs } = useSongs();
  const [backgroundColor, setBackgroundColor] = useState("#0f0f0f");

  useEffect(() => {
    if (songs && songs.length > 0) {
      const selectedSong = songs[0]; // For example, take the first song or logic to get the selected song
      if (selectedSong && selectedSong.accent) {
        setBackgroundColor(selectedSong.accent); // Set the accent color as background
      }
    }
  }, [songs]);

  return (
    <div
      className="flex flex-col justify-between p-4 h-screen transition-colors duration-500"
      style={{ backgroundColor }} // Apply dynamic background color
    >
      <header className="flex items-center p-0 space-x-2">
        <SiSpotify className="text-white sm:w-10 sm:h-10 md:w-10 md:h-20 lg:w-10 lg:h-8 xl:w-8 xl:h-12 xl:m-1" />
        <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-2xl font-inter font-semibold">
          Spotify
          <sup className="text-sm sm:text-base md:text-lg">®</sup>
        </span>
      </header>
    </div>
  );
};

export default MainPage;
