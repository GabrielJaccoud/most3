import React from 'react';
import './GlobalAudioPlayer.css';

const GlobalAudioPlayer = ({ isPlaying, togglePlayPause, volume, handleVolumeChange, isPausedByOtherMedia }) => {
  return (
    <div className={`global-audio-bubble ${isPlaying ? 'is-playing' : ''}`}>
      {/* Botão de Controle Principal */}
      <button 
        onClick={togglePlayPause} 
        className="bubble-toggle"
        disabled={isPausedByOtherMedia}
        aria-label={isPlaying ? "Pausar Trilha" : "Tocar Trilha"}
      >
        {isPausedByOtherMedia ? '⏳' : (isPlaying ? '⏸' : '▶')}
      </button>

      {/* Conteúdo Expansível no Hover */}
      <div className="bubble-content">
        <div className="bubble-info">
          <span className="track-name">Trilha Sonora</span>
          <span className="status-text">
            {isPausedByOtherMedia ? 'Pausado p/ vídeo' : (isPlaying ? 'Tocando agora' : 'Pausado')}
          </span>
        </div>

        <div className="bubble-volume">
          <span style={{fontSize: '0.8rem'}}>🔈</span>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            aria-label="Volume"
          />
          <span style={{fontSize: '0.8rem'}}>🔊</span>
        </div>
      </div>

      {isPausedByOtherMedia && (
        <span className="bubble-pause-msg">Pausado para o vídeo</span>
      )}
    </div>
  );
};

export default GlobalAudioPlayer;
