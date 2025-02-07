import React from "react";
import { SongProvider } from "./context/SongContext"; 
import Home from "./pages/Home";

function App() {
  return (
    <SongProvider>
      <Home />
    </SongProvider>
  );
}

export default App;
