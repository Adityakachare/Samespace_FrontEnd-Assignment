import React, { useEffect, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const AudioPlayerComponent = ({
  songs = [],
  selectedSong,
  setSelectedSong,
  setCurrentSongIndex,
  setBackgroundColor,
  toggleSongList,
}) => {
  const audioRef = useRef(null);
  const songIndexRef = useRef(0); // Track current song index

  // Custom styles for hiding elements & styling player
  const customStyles = `
.rhap_time, 
.rhap_total-time, 
.rhap_current-time, 
.rhap_loop-button, 
.rhap_progress-indicator {
  display: none !important;
}

.rhap_container {
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
}

.rhap_volume-button {
  color: white !important;
  background: rgba(255, 255, 255, 0.3) !important;
  padding: 4px !important;
  border-radius: 50%;
  font-size: 75px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin-right: 2px !important;
}

.rhap_volume-bar {
  background-color: rgba(255, 255, 255, 0.3) !important;
  margin-right: 15px !important;
}

.rhap_volume-indicator, 
.rhap_controls-section button, 
.rhap_main-controls-button {
  color: white !important;
}

.rhap_volume-indicator {
  background-color: white !important;
}

.rhap_progress-bar, 
.rhap_progress-bar-background {
  width: 100% !important;
  background: rgba(255, 255, 255, 0.3) !important;
}

.rhap_progress-filled {
  background-color: white !important;
}

/* Styles for smaller screens */
@media (max-width: 640px) {
  .rhap_controls-section {
    gap: 0.2px !important; /* Reduce space between buttons */
  }

  .rhap_controls-section button, 
  .rhap_main-controls-button {
    font-size: 25px !important;
    margin: 0.1px !important; /* Reduce margin between buttons */
  }

    .rhap_volume-bar {
    margin-left: 2px !important;}
}
  `;

  // Handle song selection changes
  useEffect(() => {
    if (selectedSong && songs.length > 0) {
      const newIndex = songs.findIndex((song) => song.id === selectedSong.id);
      if (newIndex !== -1) {
        songIndexRef.current = newIndex;
        setCurrentSongIndex(newIndex);
        setBackgroundColor(selectedSong.accent || "#0f0f0f");

        // Ensure previous audio is paused before playing new song
        if (audioRef.current?.audio?.current) {
          audioRef.current.audio.current.pause();
          audioRef.current.audio.current.src = selectedSong.url;
          setTimeout(() => {
            try {
              audioRef.current.audio.current.play();
            } catch (error) {
              console.warn("Playback interrupted:", error);
            }
          }, 200);
        }
      }
    }
  }, [selectedSong, songs]);

  // Play the next song
  const handleNext = () => {
    if (songs.length === 0) return;

    let nextIndex = (songIndexRef.current + 1) % songs.length;
    songIndexRef.current = nextIndex;
    setSelectedSong(songs[nextIndex]);
    setBackgroundColor(songs[nextIndex]?.accent || "#0f0f0f");
  };

  // Play the previous song
  const handlePrevious = () => {
    if (songs.length === 0) return;

    let prevIndex =
      songIndexRef.current === 0 ? songs.length - 1 : songIndexRef.current - 1;
    songIndexRef.current = prevIndex;
    setSelectedSong(songs[prevIndex]);
    setBackgroundColor(songs[prevIndex]?.accent || "#0f0f0f");
  };

  // Automatically play next song when current one ends
  const handleEnd = () => {
    handleNext();
  };

  return (
    <div className="flex flex-col items-center w-full px-2 sm:px-0 mb-[-100px]">
      <style>{customStyles}</style>
      {selectedSong ? (
        <div className="w-full max-w-[90%] sm:max-w-[500px] rounded-lg flex flex-col items-center">
          <div className="relative flex items-center w-full">
            <BiDotsHorizontalRounded
              className="absolute left-[25px] top-[45px] z-10 text-[25px] text-white cursor-pointer bg-[rgba(200,200,200,0.3)] rounded-full border-none p-[5px] md:text-3xl lg:text-3xl lg:top-[40px]"
              onClick={() => {
                if (window.innerWidth <= 640) toggleSongList(); // Only for mobile
              }}
            />

            {/* Audio Player */}
            <div className="w-full">
              <AudioPlayer
                ref={audioRef}
                src={selectedSong?.url || ""}
                volume={0.5}
                showJumpControls={false}
                showDownloadProgress={false}
                showFilledProgress
                showSkipControls={true}
                onClickNext={handleNext}
                onClickPrevious={handlePrevious}
                onEnded={handleEnd}
                customAdditionalControls={[]}
                className="!bg-transparent !text-white w-full"
                loop={false}
                showLoopControl={false}
              />
            </div>
          </div>
        </div>
      ) : (
        <p className="text-white text-center mt-2">No song selected</p>
      )}
    </div>
  );
};

export default AudioPlayerComponent;
