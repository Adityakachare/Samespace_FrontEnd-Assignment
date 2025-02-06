import React from "react";

const Header = ({ showTopTracks, setShowTopTracks }) => {
  const handleSelection = (isTopTracks) => {
    setShowTopTracks(isTopTracks);
  };

  return (
    <div className="font-spotify flex justify-center sm:justify-start space-x-8 absolute top-12 sm:top-10 left-1/2 sm:left-1/6 transform -translate-x-1/2 sm:translate-x-0">
      <h2
        className={`cursor-pointer text-lg max-[375px]:text-sm sm:text-xl md:text-xl lg:text-2xl font-bold transition-all duration-300 ease-in-out ${
          !showTopTracks ? "text-white" : "text-white/50"
        }`}
        onClick={() => handleSelection(false)}
      >
        For You
      </h2>
      <h2
        className={`cursor-pointer text-lg max-[375px]:text-sm sm:text-xl md:text-xl lg:text-2xl font-bold transition-all duration-300 ease-in-out ${
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
