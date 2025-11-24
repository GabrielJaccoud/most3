import React, { useState, useEffect, useRef } from 'react';

const GlobalAudioPlayer = ({ audioSrc, isPlaying, togglePlayPause, volume, handleVolumeChange, isPausedByOtherMedia }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    // Mostrar o player após um pequeno delay para garantir que o App.jsx carregou
    const timer = setTimeout(() => {
      setShowPlayer(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPlayer) {
    return null;
  }

  return (
    <div className="audio-player-fixed global-player fade-in-up">
      <div className="audio-player-content">
        <div className="audio-info">
          <span className="audio-icon-animated">{isPlaying ? '🎶' : '🔇'}</span>
          <p>Trilha Sonora: Mostardinha</p>
        </div>
        <div className="player-controls">
          <button 
            onClick={togglePlayPause} 
            className="audio-btn-fixed"
            disabled={isPausedByOtherMedia}
            title={isPausedByOtherMedia ? "Pausado por outra mídia" : isPlaying ? "Pausar Trilha" : "Tocar Trilha"}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
            title="Volume"
          />
        </div>
      </div>
      {isPausedByOtherMedia && (
        <p className="pause-message">Pausado para reprodução de outra mídia.</p>
      )}
    </div>
  );
};

export default GlobalAudioPlayer;
