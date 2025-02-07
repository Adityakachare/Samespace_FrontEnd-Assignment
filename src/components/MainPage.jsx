// import React, { useEffect, useState } from "react";
// import { SiSpotify } from "react-icons/si";
// import { useSongs } from "../context/SongContext";
// import SongList from "../components/SongList";
// import SongCard from "../components/SongCard";

// const MainPage = () => {
//   const songs = useSongs();
//   const [backgroundColor, setBackgroundColor] = useState("#0f0f0f");
//   const [showTopTracks, setShowTopTracks] = useState(false);
//   const [selectedSong, setSelectedSong] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);

//   useEffect(() => {
//     if (songs?.length > 0 && selectedSong?.accent) {
//       setBackgroundColor(selectedSong.accent);
//     }
//   }, [selectedSong]);

//   return (
//     <div
//       className="flex flex-col sm:flex-row justify-start sm:justify-between p-4 min-h-screen transition-colors duration-1000"
//       style={{
//         background: `linear-gradient(120deg, ${backgroundColor} 10%, #0f0f0f 90%)`,
//       }}
//     >
//       {/* Left Section */}
//       <div className="flex flex-col w-full sm:w-2/3">
//         <header className="flex items-center justify-center space-x-2 md:justify-start">
//           <SiSpotify className="text-white sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-8 xl:h-8" />
//           <span className="text-white text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-3xl font-inter font-semibold">
//             Spotify
//             <sup className="text-xs sm:text-sm md:text-base lg:text-lg">®</sup>
//           </span>
//         </header>

//         <SongList
//           showTopTracks={showTopTracks}
//           setShowTopTracks={setShowTopTracks}
//           setSelectedSong={setSelectedSong}
//           searchQuery={searchQuery}
//           setSearchQuery={setSearchQuery}
//           selectedSong={selectedSong}
//           setCurrentSongIndex={setCurrentSongIndex}
//         />
//       </div>

//       <SongCard
//         song={selectedSong}
//         songs={songs}
//         setSelectedSong={setSelectedSong}
//         currentSongIndex={currentSongIndex}
//         setCurrentSongIndex={setCurrentSongIndex}
//         setBackgroundColor={setBackgroundColor}
//       />
//     </div>
//   );
// };

// export default MainPage;

import React, { useEffect, useState } from "react";
import { SiSpotify } from "react-icons/si";
import { useSongs } from "../context/SongContext";
import SongList from "../components/SongList";
import SongCard from "../components/SongCard";

const MainPage = () => {
  const songs = useSongs();
  const [backgroundColor, setBackgroundColor] = useState("#0f0f0f");
  const [showTopTracks, setShowTopTracks] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const [showSongList, setShowSongList] = useState(true);

  // Track window resize to detect mobile screens
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      setShowSongList(true); // Reset to show song list on screen resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (songs?.length > 0 && selectedSong?.accent) {
      setBackgroundColor(selectedSong.accent);
    }
  }, [selectedSong]);

  return (
    <div
      className="flex flex-col sm:flex-row justify-start sm:justify-between p-4 min-h-screen transition-colors duration-1000"
      style={{
        background: `linear-gradient(120deg, ${backgroundColor} 10%, #0f0f0f 90%)`,
      }}
    >
      {/* Left Section */}
      <div className="flex flex-col w-full sm:w-2/3">
        <header className="flex items-center justify-center space-x-2 md:justify-start">
          <SiSpotify className="text-white sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-8 xl:h-8" />
          <span className="text-white text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-3xl font-inter font-semibold">
            Spotify
            <sup className="text-xs sm:text-sm md:text-base lg:text-lg">®</sup>
          </span>
        </header>

        {/* Show Song List or Song Card based on state */}
        {(!isMobile || showSongList) && (
          <SongList
            showTopTracks={showTopTracks}
            setShowTopTracks={setShowTopTracks}
            setSelectedSong={(song) => {
              setSelectedSong(song);
              if (isMobile) setShowSongList(false); // Hide song list on mobile
            }}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedSong={selectedSong}
            setCurrentSongIndex={setCurrentSongIndex}
          />
        )}
      </div>

      {(!isMobile || !showSongList) && (
        <SongCard
          song={selectedSong}
          songs={songs}
          setSelectedSong={setSelectedSong}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          setBackgroundColor={setBackgroundColor}
          toggleSongList={() => setShowSongList(true)} // Hide SongCard on mobile
        />
        
      )}
      
    </div>
  );
};

export default MainPage;
