// src/components/QuizSection.jsx
import React, { useState } from 'react';
import './QuizSection.css';

const QuizSection = () => {
  const [showResult, setShowResult] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const characters = {
    mostardinha: {
      name: 'Mostardinha',
      description: 'Você é corajoso, amoroso e sempre disposto a ajudar os amigos! Assim como Mostardinha, você valoriza a amizade acima de tudo.',
      image: '/mostardinha.png'
    },
    maionese: {
      name: 'Maionese',
      description: 'Você é doce, carinhoso e sempre pensa nos outros! Como Maionese, você espalha amor por onde passa.',
      image: '/maionese.png'
    },
    salsinha: {
      name: 'Salsinha',
      description: 'Você é alegre, divertido e adora fazer os outros sorrirem! Assim como Salsinha, você traz energia positiva para todos.',
      image: '/salsinha.png'
    },
    alho: {
      name: 'Velho Alho',
      description: 'Você é sábio, paciente e sempre tem um conselho valioso! Como o Velho Alho, você é a voz da experiência e da sabedoria.',
      image: '/alho.png'
    }
  };

  const handleOptionSelect = (character) => {
    setSelectedCharacter(characters[character]);
    setShowResult(true);
  };

  const restartQuiz = () => {
    setShowResult(false);
    setSelectedCharacter(null);
  };

  const sendCharacterMessage = () => {
    const email = document.getElementById('quizEmail').value;
    if (email) {
      alert(`Mensagem especial de ${selectedCharacter.name} será enviada para ${email}!`);
      // Aqui você pode implementar a lógica de envio de e-mail
    } else {
      alert('Por favor, insira um e-mail válido.');
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
                <img 
                  id="resultImage" 
                  src={selectedCharacter.image} 
                  alt={selectedCharacter.name}
                />
                <h3 id="resultName">{selectedCharacter.name}</h3>
                <p id="resultDescription">{selectedCharacter.description}</p>
              </div>
              <div className="result-actions">
                <button 
                  className="btn btn-primary" 
                  onClick={restartQuiz}
                  aria-label="Refazer o quiz"
                >
                  <span className="btn-icon" aria-hidden="true">🔄</span> Fazer Novamente
                </button>
                <div className="email-capture">
                  <p>Receba uma mensagem especial do seu personagem por e-mail!</p>
                  <div className="email-form">
                    <label htmlFor="quizEmail" className="sr-only">Seu e-mail</label>
                    <input 
                      type="email" 
                      placeholder="Seu e-mail" 
                      id="quizEmail" 
                      aria-label="Campo para digitar seu e-mail"
                    />
                    <button 
                      className="btn btn-secondary" 
                      onClick={sendCharacterMessage}
                      aria-label="Receber mensagem por e-mail"
                    >
                      <span className="btn-icon" aria-hidden="true">✨</span> Receber
                    </button>
                  </div>
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

