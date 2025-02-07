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

  // Custom CSS to hide unwanted elements and set white color
  const customStyles = `
    .rhap_time,
.rhap_total-time,
.rhap_current-time,
.rhap_loop-button,
.rhap_progress-indicator {
  display: none !important;
}

.rhap_volume-button {
  color: white !important;
  background: rgba(255, 255, 255, 0.3) !important;
  padding: 4px !important;
  border-radius: 50%;
  font-size: 75px !important; /* Increased size by 1 unit */
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.rhap_volume-indicator {
  background: white !important;
}

.rhap_container,
.rhap_controls-section button,
.rhap_main-controls-button {
  color: white !important;
}

.rhap_play-pause-button:hover,
.rhap_volume-button:hover {
  color: rgba(255, 255, 255, 0.9) !important;
}

.rhap_progress-bar,
.rhap_progress-bar-background {
  width: 100% !important;
  background: rgba(255, 255, 255, 0.3) !important;
}

.rhap_progress-filled {
  background-color: white !important;
}

.rhap_download-progress {
  background: rgba(200, 200, 200, 0.3) !important;
}

.rhap_volume-bar {
  background: rgba(255, 255, 255, 0.3) !important;
  height: 5px !important;
  border-radius: 5px !important;
}


  `;

  // Set current song index when selectedSong changes
  useEffect(() => {
    if (selectedSong && songs.length > 0) {
      const newIndex = songs.findIndex((song) => song.id === selectedSong.id);
      if (newIndex !== -1) {
        setCurrentSongIndex(newIndex);
        setBackgroundColor(selectedSong.accent || "#0f0f0f");

        // Autoplay when song changes
        setTimeout(() => {
          audioRef.current?.audio?.current?.play();
        }, 200);
      }
    }
  }, [selectedSong, songs]);

  // Play next song
  const handleNext = () => {
    if (songs.length === 0) return;

    setCurrentSongIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % songs.length;
      setSelectedSong(songs[nextIndex]);
      setBackgroundColor(songs[nextIndex]?.accent || "#0f0f0f");
      return nextIndex;
    });

    setTimeout(() => {
      audioRef.current?.audio?.current?.play();
    }, 200);
  };

  // Play previous song
  const handlePrevious = () => {
    if (songs.length === 0) return;

    setCurrentSongIndex((prevIndex) => {
      const prevIndexNew = prevIndex === 0 ? songs.length - 1 : prevIndex - 1;
      setSelectedSong(songs[prevIndexNew]);
      setBackgroundColor(songs[prevIndexNew]?.accent || "#0f0f0f");
      return prevIndexNew;
    });

    setTimeout(() => {
      audioRef.current?.audio?.current?.play();
    }, 200);
  };

  // Auto-play next song when current song ends
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
              className="absolute left-[30px] top-[43px] z-10 text-[30px] text-white cursor-pointer bg-[rgba(200,200,200,0.3)] rounded-full border-none p-[5px]"
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
