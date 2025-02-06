import React, { useState, useEffect } from "react";
import { useSongs } from "../context/SongContext";

const SongList = ({ showTopTracks, setSelectedSong, searchQuery }) => {
  const songs = useSongs();
  const [durations, setDurations] = useState({});
  const [selectedSongId, setSelectedSongId] = useState(null); // Track selected song

  const handleSongClick = (song) => {
    setSelectedSong(song);
    setSelectedSongId(song.id); // Update selected song ID
  };

  useEffect(() => {
    songs.forEach((song) => {
      const audio = new Audio(song.url);
      audio.onloadedmetadata = () => {
        setDurations((prev) => ({
          ...prev,
          [song.id]: audio.duration,
        }));
      };
    });
  }, [songs]);

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
    }`;
  };

  let filteredSongs = showTopTracks
    ? songs.filter((song) => song.top_track)
    : songs;
  filteredSongs = filteredSongs.filter(
    (song) =>
      (song.name?.toLowerCase() || "").includes(
        searchQuery?.toLowerCase() || ""
      ) ||
      (song.artist?.toLowerCase() || "").includes(
        searchQuery?.toLowerCase() || ""
      )
  );

  return (
    <div
      className="group absolute top-30 left-[50%] sm:left-[24%] transform -translate-x-1/2 sm:translate-x-0 w-full sm:w-1/3 min-w-[250px] max-w-[450px] h-[80vh] p-1 overflow-y-auto flex flex-col items-start gap-3 rounded-lg 
      scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-white/10"
    >
      {filteredSongs.length > 0 ? (
        filteredSongs.map((song) => (
          <div
            key={song.id}
            onClick={() => handleSongClick(song)}
            className={`flex items-center w-full p-3 rounded-lg cursor-pointer transition-all duration-300 ease-in-out 
              ${
                selectedSongId === song.id
                  ? "bg-white/20 scale-101" // Apply hover styles when selected
                  : "hover:bg-white/20 hover:scale-101"
              }`}
          >
            <img
              src={`https://cms.samespace.com/assets/${song.cover}`}
              alt={song.title}
              className="w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] object-cover rounded-full mr-2 sm:mr-3 transition-transform duration-200 ease-in-out"
            />
            <div className="flex justify-between w-full items-center">
              <div>
                <span className="block text-base sm:text-lg font-normal text-white tracking-wider">
                  {song.name}
                </span>
                <span className="text-xs sm:text-sm text-white/70 tracking-wider">
                  {song.artist}
                </span>
              </div>
              <span className="text-base sm:text-lg text-white/70">
                {durations[song.id]
                  ? formatDuration(durations[song.id])
                  : "Loading..."}
              </span>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white text-lg text-center mt-5">
          No songs available
        </p>
      )}
    </div>
  );
};

export default SongList;
