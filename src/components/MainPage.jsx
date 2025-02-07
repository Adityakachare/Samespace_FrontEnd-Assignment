// import React, { useEffect, useState } from "react";
// import { SiSpotify } from "react-icons/si";
// import { useSongs } from "../context/SongContext";
// import Header from "../components/Header";
// import SongList from "../components/SongList";
// import SearchBar from "../components/SearchBar";
// import SongCard from "../components/SongCard";
// import AudioPlayerComponent from "../components/AudioPlayerComponent";

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

//   // Update current song index when a new song is selected
//   useEffect(() => {
//     if (selectedSong && songs.length > 0) {
//       const newIndex = songs.findIndex((song) => song.id === selectedSong.id);
//       if (newIndex !== -1) {
//         setCurrentSongIndex(newIndex);
//       }
//     }
//   }, [selectedSong, songs]);

//   return (
//     <div
//       className="flex flex-col sm:flex-row justify-start sm:justify-between p-4 min-h-screen transition-colors duration-1000"
//       style={{
//         background: `linear-gradient(120deg, ${backgroundColor}  10%,#0f0f0f 90%)`,
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

//         <Header
//           showTopTracks={showTopTracks}
//           setShowTopTracks={setShowTopTracks}
//         />
//         <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

//         <SongList
//           showTopTracks={showTopTracks}
//           setSelectedSong={setSelectedSong}
//           searchQuery={searchQuery}
//           selectedSong={selectedSong}
//           setCurrentSongIndex={setCurrentSongIndex} // Ensure correct index tracking
//         />
//       </div>

//       <SongCard song={selectedSong} />

//       {/* Pass required props to AudioPlayerComponent */}
//       <AudioPlayerComponent
//         songs={songs}
//         selectedSong={selectedSong}
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
import Header from "../components/Header";
import SongList from "../components/SongList";
import SearchBar from "../components/SearchBar";
import SongCard from "../components/SongCard";

const MainPage = () => {
  const songs = useSongs();
  const [backgroundColor, setBackgroundColor] = useState("#0f0f0f");
  const [showTopTracks, setShowTopTracks] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

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

        <Header
          showTopTracks={showTopTracks}
          setShowTopTracks={setShowTopTracks}
        />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <SongList
          showTopTracks={showTopTracks}
          setSelectedSong={setSelectedSong}
          searchQuery={searchQuery}
          selectedSong={selectedSong}
          setCurrentSongIndex={setCurrentSongIndex} // Ensures song index tracking
        />
      </div>

      {/* SongCard now handles audio logic */}
      <SongCard
        song={selectedSong}
        songs={songs}
        setSelectedSong={setSelectedSong}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        setBackgroundColor={setBackgroundColor}
      />
    </div>
  );
};

export default MainPage;
