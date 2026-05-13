// src/components/QuizSection.jsx
import React, { useState } from 'react';
import './QuizSection.css';

const QuizSection = () => {
  const [showResult, setShowResult] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

  const characters = {
    mostardinha: {
      name: 'Mostardinha',
      description: 'Você é corajoso, amoroso e sempre disposto a ajudar os amigos! Assim como Mostardinha, você valoriza a amizade acima de tudo.',
      image: '/mostardinha.png',
      specialMessage: 'Oi! Aqui é o Mostardinha. Lembre-se: ser pequeno não impede ninguém de ter um coração gigante! 💛'
    },
    maionese: {
      name: 'Maionese',
      description: 'Você é doce, carinhoso e sempre pensa nos outros! Como Maionese, você espalha amor por onde passa.',
      image: '/maionese.png',
      specialMessage: 'Olá! A Maionese passando para dizer que o amor é o tempero mais importante da vida! ✨'
    },
    salsinha: {
      name: 'Salsinha',
      description: 'Você é alegre, divertido e adora fazer os outros sorrirem! Assim como Salsinha, você traz energia positiva para todos.',
      image: '/salsinha.png',
      specialMessage: 'E aí! O Salsinha chegou! Nunca perca esse seu sorriso que ilumina tudo ao redor! 🌿🎉'
    },
    alho: {
      name: 'Velho Alho',
      description: 'Você é sábio, paciente e sempre tem um conselho valioso! Como o Velho Alho, você é a voz da experiência e da sabedoria.',
      image: '/alho.png',
      specialMessage: 'Saudações. O Velho Alho admira sua busca por sabedoria. O bem que fazemos sempre volta para nós. 🧄🙏'
    }
  };

  const handleOptionSelect = (character) => {
    setSelectedCharacter(characters[character]);
    setShowResult(true);
    setSubmitMessage({ type: '', text: '' });
  };

  const restartQuiz = () => {
    setShowResult(false);
    setSelectedCharacter(null);
    setEmail('');
    setSubmitMessage({ type: '', text: '' });
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const sendCharacterMessage = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setSubmitMessage({ type: 'error', text: 'Por favor, insira um e-mail válido.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage({ type: '', text: '' });

    // Simulando uma chamada de API para envio de e-mail/captura de lead
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitMessage({ 
        type: 'success', 
        text: `Oba! A mensagem especial de ${selectedCharacter.name} foi enviada para ${email}!` 
      });
      setEmail('');
    } catch (error) {
      setSubmitMessage({ 
        type: 'error', 
        text: 'Ops! Ocorreu um erro ao enviar. Tente novamente mais tarde.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quiz" className="quiz-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">🎭 Qual Personagem de Temperópolis é Você?</h2>
          <p className="section-subtitle">Descubra qual personagem mais combina com você!</p>
        </div>
        
        <div className="quiz-container fade-in-up">
          {!showResult ? (
            <div className="quiz-question" id="quizQuestion">
              <h3>Como você reage quando encontra um amigo triste?</h3>
              <div className="quiz-options">
                <button 
                  className="quiz-option" 
                  onClick={() => handleOptionSelect('mostardinha')}
                  aria-label="Escolher opção: Ofereço um abraço e escuto com carinho"
                >
                  🤗 Ofereço um abraço e escuto com carinho
                </button>
                <button 
                  className="quiz-option" 
                  onClick={() => handleOptionSelect('maionese')}
                  aria-label="Escolher opção: Tento fazer algo especial para alegrar"
                >
                  💝 Tento fazer algo especial para alegrar
                </button>
                <button 
                  className="quiz-option" 
                  onClick={() => handleOptionSelect('salsinha')}
                  aria-label="Escolher opção: Conto uma piada para fazer rir"
                >
                  🎉 Conto uma piada para fazer rir
                </button>
                <button 
                  className="quiz-option" 
                  onClick={() => handleOptionSelect('alho')}
                  aria-label="Escolher opção: Dou um conselho sábio e carinhoso"
                >
                  🧠 Dou um conselho sábio e carinhoso
                </button>
              </div>
            </div>
          ) : (
            <div className="quiz-result" id="quizResult">
              <div className="result-character">
                <div className="result-image-container">
                  <img 
                    id="resultImage" 
                    src={selectedCharacter.image} 
                    alt={selectedCharacter.name}
                    className="floating-anim"
                  />
                </div>
                <h3 id="resultName">Você é: {selectedCharacter.name}!</h3>
                <p id="resultDescription">{selectedCharacter.description}</p>
                <div className="character-quote">
                   <blockquote>{selectedCharacter.specialMessage}</blockquote>
                </div>
              </div>
              
              <div className="result-actions">
                <div className="email-capture">
                  <h4>🎁 Quer um presente do {selectedCharacter.name}?</h4>
                  <p>Digite seu e-mail para receber uma mensagem exclusiva e novidades de Temperópolis!</p>
                  
                  <form className="email-form" onSubmit={sendCharacterMessage}>
                    <div className="input-group">
                      <label htmlFor="quizEmail" className="sr-only">Seu e-mail</label>
                      <input 
                        type="email" 
                        placeholder="seu@email.com" 
                        id="quizEmail" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting}
                        required
                        aria-label="Campo para digitar seu e-mail"
                      />
                      <button 
                        type="submit"
                        className={`btn btn-secondary ${isSubmitting ? 'loading' : ''}`}
                        disabled={isSubmitting}
                        aria-label="Receber mensagem por e-mail"
                      >
                        {isSubmitting ? 'Enviando...' : 'Receber Agora! ✨'}
                      </button>
                    </div>
                  </form>
                  
                  {submitMessage.text && (
                    <div className={`form-message ${submitMessage.type}`}>
                      {submitMessage.text}
                    </div>
                  )}
                </div>

                <div className="result-footer">
                  <button 
                    className="btn btn-outline" 
                    onClick={restartQuiz}
                    aria-label="Refazer o quiz"
                  >
                    <span className="btn-icon" aria-hidden="true">🔄</span> Fazer Novamente
                  </button>
                  <a href="https://pay.hotmart.com/H100940670E" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    🛒 Conhecer o Livro Completo
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
