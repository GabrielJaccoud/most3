import React from 'react';
import './ParentsSection.css';

const ParentsSection = () => {
  const tips = [
    {
      title: 'A Importância da Leitura Compartilhada',
      description: 'Ler com seu filho fortalece o vínculo afetivo e estimula a imaginação. O Mostardinha foi criado para ser lido em família.',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      title: 'Desenvolvendo a Inteligência Emocional',
      description: 'Use os personagens de Temperópolis para conversar sobre medo, coragem e amor. Cada alimento representa um sentimento.',
      icon: '❤️'
    },
    {
      title: 'O Poder da Música no Aprendizado',
      description: 'As canções originais ajudam a fixar as lições e tornam o momento da leitura muito mais divertido e memorável.',
      icon: '🎵'
    }
  ];

  return (
    <section id="para-pais" className="section parents-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">💡 Dicas para Pais e Educadores</h2>
          <p className="section-subtitle">Como aproveitar ao máximo a jornada por Temperópolis com seus pequenos.</p>
        </div>

        <div className="tips-grid">
          {tips.map((tip, index) => (
            <div key={index} className="tip-card fade-in-up">
              <div className="tip-icon">{tip.icon}</div>
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </div>
          ))}
        </div>

        <div className="parents-cta fade-in-up">
          <p>Quer saber mais sobre como a literatura pode transformar a infância?</p>
          <a href="#newsletter" className="btn btn-outline">Assine nossa Newsletter</a>
        </div>
      </div>
    </section>
  );
};

export default ParentsSection;
