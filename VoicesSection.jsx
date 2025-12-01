import React from 'react';
import gabrielJaccoud from '/20.png';
import jaqueline from '/jaqueline.jpg';
import carol from '/carol.jpg';
import klaudiaLopes from '/klaudia-lopes.jpg';
import gabrielMorais from '/gabriel-morais.jpg';
import daniSouza from '/dani-souza.jpg';
import andreCarneiro from '/andre-carneiro.jpg';
import victorMoreno from '/victor-moreno.jpg';
import piterDePaula from '/piter-de-paula.jpg';
import grazi from '/grazi.jpg';
import helderCanto from '/helder-canto.jpg';
import nathaliaJaccoud from '/nathalia-jaccoud.jpg';
import andreNobrega from '/andre-nobrega.jpg';
import antonioJaccoud from '/antonio_jaccoud_novo.jpg';

const VoicesSection = () => {
  const voices = [
    {
      name: 'Gabriel Jaccoud',
      image: gabrielJaccoud,
      characters: 'Narrador, Grande Inhame, Velho Alho, Cuco',
      quote: '"Narrar e dirigir esse projeto me lembrou do meu propósito: tocar corações."',
      instagram: 'https://www.instagram.com/gabriel_jaccoud',
      delay: 0
    },
    {
      name: 'Jaqueline',
      image: jaqueline,
      characters: 'Dona Cigarra',
      quote: '"Cantar enquanto dublava foi um desafio bom de se viver."',
      instagram: 'https://www.instagram.com/jaqueline',
      delay: 200
    },
    {
      name: 'Carolina Lopes',
      image: carol,
      characters: 'Mostardinha, Maionese',
      quote: '',
      instagram: 'https://www.instagram.com/lopescarolnina',
      delay: 400
    },
    {
      name: 'Klaudia Lopes',
      image: klaudiaLopes,
      characters: 'Cadu',
      quote: '',
      instagram: 'https://www.instagram.com/klaudya.lopes',
      delay: 600
    },
    {
      name: 'Gabriel Morais',
      image: gabrielMorais,
      characters: 'Theo',
      quote: '',
      instagram: 'https://www.instagram.com/gabriel.morais1801',
      delay: 800
    },
    {
      name: 'Daniele Souza',
      image: daniSouza,
      characters: 'Débora',
      quote: '',
      instagram: 'https://www.instagram.com/vozdanielesouza',
      delay: 1000
    },
    {
      name: 'André Carneiro',
      image: andreCarneiro,
      characters: 'Catchup',
      quote: '',
      instagram: 'https://www.instagram.com/prof_andre_carneiro',
      delay: 1200
    },
    {
      name: 'Victor Moreno',
      image: victorMoreno,
      characters: 'Repolho',
      quote: '',
      instagram: 'https://www.instagram.com/housnel',
      delay: 1400
    },
    {
      name: 'Piter de Paula',
      image: piterDePaula,
      characters: 'Salsinha',
      quote: '',
      instagram: 'https://www.instagram.com/piterdepaulamusico',
      delay: 1600
    },
    {
      name: 'Graziela Ferreira',
      image: grazi,
      characters: 'Senhora Mostarda',
      quote: '',
      instagram: 'https://www.instagram.com/zifsilva_',
      delay: 1800
    },
    {
      name: 'Helder Canto',
      image: helderCanto,
      characters: 'Tovar',
      quote: '',
      instagram: 'https://www.instagram.com/heldercanto',
      delay: 2000
    },
    {
      name: 'Nathália Jaccoud',
      image: nathaliaJaccoud,
      characters: 'Macaquinho',
      quote: '',
      instagram: 'https://www.instagram.com/jaccoudnathalia',
      delay: 2200
    },
    {
      name: 'André Nóbrega',
      image: andreNobrega,
      characters: 'Macaco',
      quote: '',
      instagram: 'https://www.instagram.com/talesoftoficial',
      delay: 2400
    },
    {
      name: 'Antônio Jaccoud',
      image: antonioJaccoud,
      characters: 'Comandante',
      quote: '',
      instagram: '',
      delay: 2600
    }
  ];

  return (
    <section id="vozes" className="section voices-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">🎤 Vozes que Encantam</h2>
          <p className="section-subtitle">Conheça os artistas que deram voz, emoção e alma aos personagens de Temperópolis.</p>
        </div>

        <div className="voices-grid">
          {voices.map((voice, index) => (
            <div 
              key={index} 
              className="voice-card fade-in-up" 
              style={{ animationDelay: `${voice.delay}ms` }}
            >
              <img 
                src={voice.image} 
                alt={`${voice.name} - ${voice.characters}`} 
                className="voice-photo" 
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/assets/images/placeholder-avatar.png';
                }}
              />
              <div className="voice-info">
                <h3>{voice.name}</h3>
                <p><strong>Personagem{voice.characters.includes(',') ? 's' : ''}:</strong> {voice.characters}</p>
                {voice.quote && (
                  <p className="voice-quote">{voice.quote}</p>
                )}
                {voice.instagram && (
                  <a 
                    href={voice.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="voice-social" 
                    aria-label={`Visitar o Instagram de ${voice.name}`}
                  >
                    📸 Instagram
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoicesSection;

