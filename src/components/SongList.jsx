import React from "react";
import { useSongs } from "../context/SongContext"; // Import the custom hook

const SongList = ({ showTopTracks }) => {
  const songs = useSongs(); // Get the songs directly from context

  // Filter songs based on the selected category
  const filteredSongs = showTopTracks
    ? songs.filter((song) => song.top_track) // Show only top tracks
    : songs; // Show all songs

  return (
    <div className="song-list-container">
      {filteredSongs.length > 0 ? (
        filteredSongs.map((song) => (
          <div key={song.id} className="song-item">
            <img src={song.cover} alt={song.title} className="song-cover" />
            <div className="song-info">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No songs available</p>
      )}
    </div>
  );
};

export default SongList;
