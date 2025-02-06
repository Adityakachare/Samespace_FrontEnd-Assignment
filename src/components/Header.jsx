import React from "react";

const Header = ({ showTopTracks, setShowTopTracks }) => {
  const handleSelection = (isTopTracks) => {
    setShowTopTracks(isTopTracks);
  };

  return (
    <div className="flex justify-center sm:justify-start space-x-6 absolute top-10 sm:top-6 left-1/2 sm:left-1/4 transform -translate-x-1/2 sm:translate-x-0">
      <h2
        className={`cursor-pointer text-base sm:text-lg md:text-xl lg:text-2xl font-bold transition-all duration-300 ease-in-out ${
          !showTopTracks ? "text-white" : "text-white/50"
        }`}
        onClick={() => handleSelection(false)}
      >
        For You
      </h2>
      <h2
        className={`cursor-pointer text-base sm:text-lg md:text-xl lg:text-2xl font-bold transition-all duration-300 ease-in-out ${
          showTopTracks ? "text-white" : "text-white/50"
        }`}
        onClick={() => handleSelection(true)}
      >
        Top Tracks
      </h2>
    </div>
  );
};

export default Header;
