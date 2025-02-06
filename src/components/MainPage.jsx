import React, { useEffect, useState } from "react";
import { SiSpotify } from "react-icons/si";
import { useSongs } from "../context/SongContext";

const MainPage = () => {
  const { songs } = useSongs();
  const [backgroundColor, setBackgroundColor] = useState("#0f0f0f");

  useEffect(() => {
    if (songs && songs.length > 0) {
      const selectedSong = songs[0]; // Default to first song
      if (selectedSong && selectedSong.accent) {
        setBackgroundColor(selectedSong.accent);
      }
    }
  }, [songs]);

  return (
    <div
      className="flex flex-col justify-between p-4 min-h-screen transition-colors duration-500"
      style={{ backgroundColor }} // Apply dynamic background color
    >
      <header className="flex items-center space-x-2">
        <SiSpotify className="text-white sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />
        <span className="text-white text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-3xl font-inter font-semibold">
          Spotify
          <sup className="text-xs sm:text-sm md:text-base lg:text-lg">®</sup>
        </span>
      </header>
    </div>
  );
};

export default MainPage;
