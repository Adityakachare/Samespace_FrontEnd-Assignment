import React, { useEffect, useState } from "react";
import { SiSpotify } from "react-icons/si";
import { useSongs } from "../context/SongContext";
import Header from "../components/Header"; // Import Header
import SongList from "../components/SongList"; // Import SongList
import SearchBar from "../components/SearchBar"; // Import SearchBar
const MainPage = () => {
  const songs = useSongs(); // Fetch songs from context
  const [backgroundColor, setBackgroundColor] = useState("#0f0f0f");
  const [showTopTracks, setShowTopTracks] = useState(false); // State for toggling between For You and Top Tracks
  const [selectedSong, setSelectedSong] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (songs && songs.length > 0) {
      // const selectedSong = songs[1]; // Default to first song
      if (selectedSong && selectedSong.accent) {
        setBackgroundColor(selectedSong.accent);
      }
    }
  }, [selectedSong]);

  return (
    <div
      className="flex flex-col justify-start p-4 min-h-screen transition-colors duration-500"
      style={{ backgroundColor }} // Apply dynamic background color
    >
      <header className="flex items-center justify-center space-x-2 md:justify-start">
        <SiSpotify className="text-white sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-8 xl:h-8" />
        <span className="text-white text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-3xl font-inter font-semibold">
          Spotify
          <sup className="text-xs sm:text-sm md:text-base lg:text-lg">®</sup>
        </span>
      </header>

      {/* Render the Header component */}
      <Header
        showTopTracks={showTopTracks}
        setShowTopTracks={setShowTopTracks}
      />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {/* Render the SongList component */}
      {/* <SongList showTopTracks={showTopTracks} /> */}
      <SongList
        showTopTracks={showTopTracks}
        setSelectedSong={setSelectedSong}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default MainPage;
