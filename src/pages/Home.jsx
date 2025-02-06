import React from "react";
import MainPage from "../components/MainPage";
import Header from "../components/Header";
import SongList from "../components/SongList";
import SongCard from "../components/SongCard";
import AudioPlayer from "../components/AudioPlayer";

function Home() {
  return (
    <div>
      <MainPage />
      <Header />
      <SongList />
      <SongCard />
      <AudioPlayer />
    </div>
  );
}

export default Home;
