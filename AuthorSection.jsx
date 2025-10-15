// src/components/AuthorSection.jsx
import React from 'react';
import './AuthorSection.css';

const AuthorSection = () => {
  return (
    <section className="author-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">🧑‍🎨 Sobre o Autor - Gabriel Jaccoud</h2>
        </div>
        
        <div className="author-content">
          <div className="author-image fade-in-left">
            <img src="/mago2.png" alt="Gabriel Jaccoud" className="author-photo" loading="lazy" />
          </div>
          
          <div className="author-info fade-in-right">
            <p className="author-description">
              Gabriel Jaccoud é <strong>ator, cantor, escritor e educador afetivo</strong>. 
              Com uma trajetória artística e espiritual profundamente conectada ao universo da infância, 
              ele dedica sua vida à criação de obras que encantam, ensinam e tocam o coração.
            </p>
            
            <p className="author-description">
              Idealizador do <strong>Instituto CÉU</strong> e criador de projetos sociais e educacionais 
              que promovem o desenvolvimento humano, Gabriel acredita que o verdadeiro crescimento 
              começa pela alma — e que a infância é o solo mais fértil para plantar amor, consciência e valores.
            </p>
            
            <p className="author-description">
              Com sensibilidade, humor e linguagem simbólica, Gabriel transforma histórias em 
              pontes de empatia entre gerações.
            </p>
            
            <div className="author-mission">
              <blockquote>
                "Escrevo para lembrar que somos todos sementes. E que o amor é a terra onde podemos florescer."
              </blockquote>
              <cite>— Gabriel Jaccoud</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;

