import { useState, React } from "react";
import MainPage from "../components/MainPage";
import Header from "../components/Header";
import SongList from "../components/SongList";
import SongCard from "../components/SongCard";
import AudioPlayer from "../components/AudioPlayer";

function Home() {
  const [showTopTracks, setShowTopTracks] = useState(false); // Toggle between "For You" and "Top Tracks"

  return (
    <div>
      <MainPage />
      {/* <Header
        showTopTracks={showTopTracks}
        setShowTopTracks={setShowTopTracks}
      />
      <SongList showTopTracks={showTopTracks} /> */}
      <SongCard />
      <AudioPlayer />
    </div>
  );
}

export default Home;
