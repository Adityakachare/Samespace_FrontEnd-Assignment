import React from "react";

const SongCard = ({ song }) => {
  if (!song) return null;

  return (
    <div className="w-full sm:w-1/2 flex justify-center items-center p-4 sm:mt-[-100px] mt-4">
      <div className="flex flex-col items-center sm:items-start p-6 w-full max-w-[500px]">
        {/* Responsive Song Name */}
        <h2 className="text-md xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mt-3 tracking-wider text-center sm:text-left">
          {song.name}
        </h2>

        {/* Responsive Artist Name */}
        <p className="text-xs xs:text-sm sm:text-md md:text-lg text-white/50 mb-5 text-center sm:text-left">
          {song.artist}
        </p>

        {/* Responsive Song Cover */}
        <img
          src={`https://cms.samespace.com/assets/${song.cover}`}
          alt={song.name}
          className="w-[250px] h-[250px] xs:w-[300px] xs:h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] object-cover rounded-md shadow-xl transition-transform duration-300 hover:scale-[1.01]"
        />
      </div>
    </div>
  );
};

export default SongCard;
