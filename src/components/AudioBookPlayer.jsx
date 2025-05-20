import React, { useRef, useState } from "react";

export default function AudioBookPlayer({ audioSrc, cover, title, author }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(percent || 0);
  };

  const handleSeek = (e) => {
    if (!audioRef.current) return;
    const width = e.target.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const duration = audioRef.current.duration;
    audioRef.current.currentTime = (clickX / width) * duration;
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 flex flex-col items-center mt-6">
      <img src={cover} alt={title} className="w-24 h-24 object-cover rounded-lg mb-4" />
      <div className="text-center mb-2">
        <h3 className="text-lg font-bold text-[#445b70]">{title}</h3>
        <p className="text-sm text-gray-500">{author}</p>
      </div>
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />
      {/* Progress Bar */}
      <div
        className="w-full h-2 bg-gray-200 rounded-full mb-4 cursor-pointer"
        onClick={handleSeek}
      >
        <div
          className="h-2 bg-[#617886] rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {/* Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={handlePlayPause}
          className="bg-[#617886] text-white px-6 py-2 rounded-full font-bold shadow hover:bg-[#445b70] transition"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}