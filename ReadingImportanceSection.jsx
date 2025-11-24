import React from 'react';
import './ReadingImportanceSection.css';

const ReadingImportanceSection = ({ setIsReadingTipsModalOpen, pauseGlobalAudio }) => {
  return (
    <section id="leitura-familia" className="more-than-story-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">📖 Mais do que uma história. Um momento entre vocês.</h2>
          <p className="section-subtitle">Transforme a tela em tempo de conexão e afeto.</p>
        </div>

        <div className="more-content">
          {/* Texto e CTAs */}
          <div className="more-text fade-in-right">
            <p>
              Vivemos num mundo onde a tela afasta. Mas o Mostardinha foi criado para aproximar. 
              Ao ler com seu filho, você não está apenas passando uma história. Está compartilhando 
              valores, emoções, riso e presença.
            </p>
            <p>
              Uma leitura acompanhada é um presente. Cada capítulo pode ser uma semente de diálogo 
              e encantamento entre vocês.
            </p>

            <div className="more-actions">
	              <button 
	                onClick={() => setIsReadingTipsModalOpen(true)} 
	                className="btn btn-secondary btn-large" 
	                aria-haspopup="dialog" 
	                aria-expanded="false"
	              >
	                🟣 Como transformar essa leitura em um momento mágico?
	              </button>
            </div>
          </div>

          {/* Vídeo */}
          <div className="more-visual fade-in-up">
            <div className="video-wrapper">
	              <video 
	                controls 
	                autoPlay 
	                muted 
	                loop 
	                playsInline 
	                className="reading-scene-video"
	                onPlay={() => pauseGlobalAudio(true)}
	                onPause={() => pauseGlobalAudio(false)}
	                onEnded={() => pauseGlobalAudio(false)}
	              >
                <source src="/Mostardvideosite.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadingImportanceSection;

