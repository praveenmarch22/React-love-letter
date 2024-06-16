import React, { useState, useRef } from "react";
import "./LoveLetter.css";
import audioFile from "./IWannaBeYours.mp3";

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => console.log("Playback succeeded"))
          .catch((e) => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div
      className={`envelope ${isOpen ? "open" : ""}`}
      onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}
    >
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? "fullSize" : ""}`}>
        Dear pumpkin,
        <br />
        Be my girl, and I'll be your boy. Together, we can explore the world and
        share our dreams. With you, every moment feels like an adventure , and
        every dream seems within reach. I want to journey through life hand in
        hand, facing every challenge and celebrating every joy together. And
        when the time comes, I want to rest in the comfort of your embrace,
        knowing that I've lived a full life with the person I love most.
      </div>
      <audio
        ref={audioRef}
        src={audioFile}
        onError={(e) => console.error("Audio error:", e.message)}
      />
    </div>
  );
};

export default LoveLetter;
