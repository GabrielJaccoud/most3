// src/components/AudiobookSection.jsx
import React from 'react';
import './AudiobookSection.css';

const AudiobookSection = ({ pauseGlobalAudio }) => {
  return (
    <section id="audiobook" className="audiobook-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">🎧 Audiobook Gratuito</h2>
          <p className="section-subtitle">Ouça a história completa com trilha sonora original</p>
        </div>
        
        <div className="audiobook-content">
          <div className="audiobook-info fade-in-left">
            <p className="audiobook-description">
              Como um presente especial para todas as famílias, disponibilizamos gratuitamente 
              o audiobook completo do Mostardinha no YouTube. Uma experiência única com 
              narração carinhosa e música original.
            </p>
            
            <div className="audiobook-cta">
              <a 
                href="https://www.youtube.com/watch?v=BSzPFZICl5c&t=663s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary btn-large" 
                aria-label="Ouvir o audiobook gratuito do Mostardinha no YouTube"
              >
                <span className="btn-icon" aria-hidden="true">🎧</span>
                Ouvir Audiobook Gratuito
              </a>
              <a 
                href="https://www.youtube.com/@mundoninuss" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline" 
                aria-label="Visitar o canal Mundo Ninus no YouTube"
              >
                <span className="btn-icon" aria-hidden="true">📺</span>
                Visitar Canal
              </a>
            </div>
          </div>
          
          <div className="youtube-embed fade-in-right">
            <iframe 
              src="https://www.youtube.com/embed/BSzPFZICl5c?start=663" 
	              title="Audiobook Mostardinha" 
	              frameBorder="0" 
	              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
	              allowFullScreen
	              onLoad={() => {
	                // Quando o iframe carrega, tentamos pausar a trilha sonora global
	                // Nota: A pausa automática de mídia em iframes é complexa e depende do navegador.
	                // O ideal seria usar a API do YouTube, mas vamos tentar o mais simples primeiro.
	                pauseGlobalAudio(true);
	              }}
	            >
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudiobookSection;

