import React from "react";
import AudioPlayerComponent from "../components/AudioPlayerComponent";

const SongCard = ({
  song,
  songs,
  setSelectedSong,
  currentSongIndex,
  setCurrentSongIndex,
  setBackgroundColor,
  toggleSongList,
}) => {
  if (!song) return null;

  // Handle next and previous song selection
  const handleNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setSelectedSong(songs[nextIndex]);
  };

  const handlePreviousSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    setSelectedSong(songs[prevIndex]);
  };

  return (
    <div className="w-full sm:w-1/2 flex flex-col justify-center items-center p-4 sm:mt-[-100px] mt-4">
      <div className="flex flex-col items-center sm:items-start p-6 w-full max-w-[500px]">
        {/* Song Name */}
        <h2 className="text-md xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mt-3 tracking-wider text-center sm:text-left">
          {song.name}
        </h2>

        {/* Artist Name */}
        <p className="text-xs xs:text-sm sm:text-md md:text-lg text-white/50 mb-5 text-center sm:text-left">
          {song.artist}
        </p>

        <img
          src={`https://cms.samespace.com/assets/${song.cover}`}
          alt={song.name}
          className="w-[400px] aspect-square xs:w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] object-cover rounded-md shadow-xl transition-transform duration-300 hover:scale-[1.01] mx-auto"
        />
      </div>

      {/* Audio Player with Next/Previous Handling */}
      <AudioPlayerComponent
        songs={songs}
        selectedSong={song}
        setSelectedSong={setSelectedSong}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        setBackgroundColor={setBackgroundColor}
        onNext={handleNextSong}
        onPrev={handlePreviousSong}
        toggleSongList={toggleSongList}
      />
    </div>
  );
};

export default SongCard;
