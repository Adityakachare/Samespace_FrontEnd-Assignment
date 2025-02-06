import React, { createContext, useState, useEffect } from "react";
import { fetchSongs } from "../services/api";

const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchedSongs = await fetchSongs();
      setSongs(fetchedSongs);
    };
    getData();
  }, []);

  return <SongContext.Provider value={songs}>{children}</SongContext.Provider>;
};

export const useSongs = () => {
  return React.useContext(SongContext);
};
