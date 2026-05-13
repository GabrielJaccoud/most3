import React, { useState } from 'react';
import './ActivitiesSection.css';

const ActivitiesSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simulação de envio para ferramenta de e-mail marketing
      console.log('Lead capturado para atividades:', email);
      setSubmitted(true);
    }
  };

  const activities = [
    { id: 1, title: 'Colorir o Mostardinha', icon: '🎨' },
    { id: 2, title: 'Labirinto de Temperópolis', icon: '🧩' },
    { id: 3, title: 'Ligue os Pontos: Tovar', icon: '✏️' }
  ];

  return (
    <section id="atividades" className="section activities-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">🖍️ Diversão Grátis!</h2>
          <p className="section-subtitle">Baixe atividades exclusivas para colorir e brincar com a turma do Mostardinha.</p>
        </div>

        {!submitted ? (
          <div className="activities-content fade-in-up">
            <div className="activities-grid">
              {activities.map(act => (
                <div key={act.id} className="activity-preview-card">
                  <span className="activity-icon">{act.icon}</span>
                  <h3>{act.title}</h3>
                </div>
              ))}
            </div>

            <div className="lead-capture-box">
              <h3>Receba o PDF com todas as atividades no seu e-mail:</h3>
              <form onSubmit={handleSubmit} className="lead-form">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <button type="submit" className="btn btn-primary">
                  <span>📥</span> Baixar Atividades Gratuitas
                </button>
              </form>
              <p className="privacy-note">Respeitamos sua privacidade. Você receberá apenas conteúdos do Mostardinha.</p>
            </div>
          </div>
        ) : (
          <div className="success-message fade-in-up">
            <div className="success-icon">✨</div>
            <h3>Oba! Quase lá!</h3>
            <p>Enviamos o link para baixar suas atividades para o e-mail: <strong>{email}</strong></p>
            <p>Verifique sua caixa de entrada (e a de spam, por via das dúvidas!).</p>
            <button onClick={() => setSubmitted(false)} className="btn btn-secondary btn-small">Voltar</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ActivitiesSection;
