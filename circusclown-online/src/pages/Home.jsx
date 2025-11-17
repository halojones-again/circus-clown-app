import React, { useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClownClick = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleAudioEnded = () => setIsPlaying(false);

  return (
    <div className="min-h-screen bg-yellow-400 flex flex-col items-center justify-center relative px-4 overflow-hidden">
      {/* Hidden audio */}
      <audio
        ref={audioRef}
        onEnded={handleAudioEnded}
        src="https://circusclown.app/images/clown1.mp3"
        preload="auto"
      />

      {/* Top Coffee Button */}
      <div className="absolute top-4 left-4 right-4 text-center z-10">
        <a
          href="https://buymeacoffee.com/clownmusic"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-300 text-red-600 font-bold px-5 py-2.5 rounded-full hover:bg-yellow-200 transition shadow-lg text-sm sm:text-base"
        >
          Keep the laughs going! <span className="italic">Buy me a coffee.</span> ☕ 
        </a>
      </div>

      {/* The Clown — only centers perfectly once image is loaded */}
      <button
        onClick={handleClownClick}
        className={`transition-transform duration-300 hover:scale-110 active:scale-105 focus:outline-none z-20 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "opacity 0.4s, transform 0.3s" }}
      >
        <img
          src="https://circusclown.app/images/clown-logo.png"
          alt="Click for clown chaos"
          className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full shadow-2xl border-8 border-red-600"
          onLoad={() => setImageLoaded(true)}
          // This tiny inline style forces layout recalculation exactly once
          style={{ display: "block" }}
        />
      </button>

      {/* Optional invisible placeholder so layout never shifts */}
      {!imageLoaded && (
        <div className="w-64 h-64 sm:w-80 sm:h-80" aria-hidden="true" />
      )}

      {/* FIXED FOOTER — always visible, no jump */}
      <div className="fixed inset-x-0 bottom-0 bg-yellow-400/90 backdrop-blur-sm py-3 z-50 text-center">
        <p className="text-xs sm:text-sm text-red-600 italic">
          <a
            href="/privacy"
            className="hover:text-red-800"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}