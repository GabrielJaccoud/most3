import React, { useState, useRef } from 'react';

const MusicSection = ({ pauseGlobalAudio }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const audioRef = useRef(null);

  const songs = [
    { 
      id: 1, 
      title: 'Tesouros', 
      artist: 'Gabriel Jaccoud', 
     src: '/Tesouros.mp3', 
      duration: '4:02',
      description: 'Canção de ninar da mãe do Cadu',
      icon: '🎶💤',
      youtube: 'https://www.youtube.com/watch?v=E-uAaX073J0'
    },
    { 
      id: 2, 
      title: 'Salsinha e Repolho', 
      artist: 'Gabriel Jaccoud', 
     src: '/Salsinha_e_Repolho.mp3', 
      duration: '2:50',
      description: 'Entrada dos personagens engraçados',
      icon: '🎺👃',
      youtube: 'https://www.youtube.com/watch?v=X7xcPMjw00k'
    },
    { 
      id: 3, 
      title: 'A Cigarra e a Formiga', 
      artist: 'Gabriel Jaccoud', 
     src: '/A_Cigarra_e_a_Formiga.mp3', 
      duration: '3:30',
      description: 'Discussão e reconciliação',
      icon: '🐜🎤',
      youtube: 'https://www.youtube.com/watch?v=o0sJ-iMjzqg'
    },
    { 
      id: 4, 
      title: 'O Elefante', 
      artist: 'Gabriel Jaccoud', 
     src: '/O_Elefante.mp3', 
      duration: '3:10',
      description: 'Chegada de Tovar e família',
      icon: '🐘🌿',
      youtube: 'https://www.youtube.com/watch?v=DHTz17QC00g'
    },
    { 
      id: 5, 
      title: 'O Trem', 
      artist: 'Gabriel Jaccoud', 
     src: '/O_Trem.mp3', 
      duration: '2:15',
      description: 'Sonho de Cadu com sua mãe',
      icon: '🚂💭',
      youtube: 'https://www.youtube.com/watch?v=CZPrME-Ebyg'
    },
    { 
      id: 6, 
      title: 'Agradecendo', 
      artist: 'Gabriel Jaccoud',src: '/Agradecendo.mp3',
      duration: '3:20',
      description: 'Encontro do Mostardinha com a mãe',
      icon: '🤱🌼',
      youtube: 'https://www.youtube.com/watch?v=X7xcPMjw00k' // Corrected YouTube link
    },
    { 
      id: 10, 
      title: 'Cem Léguas', 
      artist: 'Gabriel Jaccoud', 
      src: '/Cem_Leguas.mp3', 
      duration: '2:30',
      description: 'Aventura de Mostardinha e seus amigos',
      icon: '🗺️🚀',
      youtube: 'https://www.youtube.com/watch?v=mwkSEisYqPM'
    },
    { 
      id: 7, 
      title: 'Brilhe, Brilhe', 
      artist: 'Gabriel Jaccoud', 
      src: '/Brilhe_Brilhe.mp3',
      duration: '2:20',
      description: 'Entrega do mapa mágico',
      icon: '✨🗺️',
      youtube: 'https://www.youtube.com/watch?v=S9veWe3S6-4'
    },
    { 
      id: 8, 
      title: 'O Cuco', 
      artist: 'Gabriel Jaccoud', 
     src: '/O_Cuco.mp3', 
      duration: '3:00',
      description: 'Aviso de mudança, passagem de tempo emocional',
      icon: '⏰🕊️',
      youtube: 'https://www.youtube.com/watch?v=xMl24S2rsPI'
    },
    { 
      id: 9, 
      title: 'Mostardinha', 
      artist: 'Gabriel Jaccoud', 
      src: '/Mostardinha.mp3',
      duration: '2:45',
      description: 'Final e festival na ilha',
      icon: '🌱🎉',
      youtube: 'https://www.youtube.com/watch?v=1BNxMnE2Crc'
    }
  ];

  const playSong = (song) => {
    setCurrentSong(song);
    if (audioRef.current) {
      audioRef.current.src = song.src;
      audioRef.current.play();
      setIsPlaying(true);
      pauseGlobalAudio(true); // Pausa a trilha sonora global
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        pauseGlobalAudio(false); // Retorna a trilha sonora global
      } else {
        audioRef.current.play();
        pauseGlobalAudio(true); // Pausa a trilha sonora global
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  return (
    <section id="musicas" className="section music-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">🎵 Músicas Integradas à História</h2>
          <p className="section-subtitle">Cada canção conta um momento especial da jornada</p>
        </div>

        {currentSong && (
          <div className="music-player-main fade-in-up">
            <div className="current-song-info">
              <h3>{currentSong.title}</h3>
              <p>{currentSong.artist}</p>
            </div>
            <div className="player-controls">
              <button onClick={togglePlayPause}>{isPlaying ? '⏸️' : '▶️'}</button>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
              />
            </div>
            <audio ref={audioRef} onEnded={() => {
              setIsPlaying(false);
              pauseGlobalAudio(false); // Retorna a trilha sonora global ao terminar
            }} />
          </div>
        )}

        <div className="music-grid">
          {songs.map((song) => (
            <div key={song.id} className="music-card fade-in-up">
              <div className="music-icon">{song.icon}</div>
              <h3>{song.title}</h3>
              <p>{song.description}</p>
              <div className="music-card-buttons">
	                <button 
	                  onClick={() => {
	                    if (currentSong && currentSong.id === song.id && isPlaying) {
	                      togglePlayPause();
	                    } else {
	                      playSong(song);
	                    }
	                  }}
                  className="btn btn-outline btn-small"
                  aria-label={`Tocar a música ${song.title}`}
                >
                  <span className="btn-icon" aria-hidden="true">🎵</span> 
	                  {currentSong && currentSong.id === song.id && isPlaying ? 'Pausar' : 'Tocar'}
	                </button>
                <a 
                  href={song.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-small" 
                  aria-label={`Ouvir a música ${song.title} no YouTube`}
                >
                  <span className="btn-icon" aria-hidden="true">🎵</span> 
                  YouTube
                </a>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default MusicSection;
