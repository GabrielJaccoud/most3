import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Mariana Silva',
      role: 'Mãe do Léo (5 anos)',
      text: 'O Mostardinha se tornou o livro favorito antes de dormir. As músicas são lindas e as lições sobre sentimentos ajudaram muito o Léo a expressar o que sente.',
      rating: 5
    },
    {
      id: 2,
      name: 'Prof. Ricardo Santos',
      role: 'Educador Infantil',
      text: 'Utilizo o material de Temperópolis em minhas aulas. É uma ferramenta pedagógica incrível para trabalhar empatia e inteligência emocional com as crianças.',
      rating: 5
    },
    {
      id: 3,
      name: 'Dra. Ana Paula',
      role: 'Psicóloga Infantil',
      text: 'Recomendo o Mostardinha para meus pacientes. A forma como a história aborda a coragem e o amor é terapêutica e muito acessível para os pequenos.',
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="section testimonials-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">💬 O que dizem as famílias</h2>
          <p className="section-subtitle">Histórias reais de quem já se encantou com o mundo de Temperópolis.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(t => (
            <div key={t.id} className="testimonial-card fade-in-up">
              <div className="stars">
                {[...Array(t.rating)].map((_, i) => <span key={i}>⭐</span>)}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
