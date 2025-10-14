// src/components/QuizSection.jsx
import React, { useState } from 'react';
import mostardinhaImg from '/mostardinha.png';
import maioneseImg from '/maionese.png';
import salsinhaImg from '/salsinha.png';
import alhoImg from '/alho.png';

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [characterScores, setCharacterScores] = useState({
    Mostardinha: 0,
    Maionese: 0,
    Salsinha: 0,
    'Velho Alho': 0,
  });
  const [resultCharacter, setResultCharacter] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = [
    {
      question: "Qual é seu maior medo?",
      options: [
        { text: "Ficar sozinho(a)", character: "Mostardinha" },
        { text: "Não ser aceito(a)", character: "Maionese" },
        { text: "Falhar", character: "Salsinha" },
        { text: "Mudanças", character: "Velho Alho" }
      ]
    },
    {
      question: "Como você lida com desafios?",
      options: [
        { text: "Busco ajuda", character: "Maionese" },
        { text: "Encaro de frente", character: "Mostardinha" },
        { text: "Evito", character: "Salsinha" },
        { text: "Penso muito antes de agir", character: "Velho Alho" }
      ]
    },
    {
      question: "O que te faz mais feliz?",
      options: [
        { text: "Brincar com amigos", character: "Salsinha" },
        { text: "Aprender coisas novas", character: "Mostardinha" },
        { text: "Ter tranquilidade", character: "Velho Alho" },
        { text: "Sentir-se útil", character: "Maionese" }
      ]
    },
    {
      question: "Qual seu conselho favorito?",
      options: [
        { text: "Seja gentil", character: "Maionese" },
        { text: "Tenha coragem", character: "Mostardinha" },
        { text: "Pense antes de agir", character: "Velho Alho" },
        { text: "Desfrute do momento", character: "Salsinha" }
      ]
    }
  ];

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswer(optionIndex);
    const selectedOption = quizQuestions[currentQuestion].options[optionIndex];
    setCharacterScores(prevScores => ({
      ...prevScores,
      [selectedOption.character]: prevScores[selectedOption.character] + 1
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      const finalCharacter = Object.keys(characterScores).reduce((a, b) => characterScores[a] > characterScores[b] ? a : b);
      setResultCharacter(finalCharacter);
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setCharacterScores({
      Mostardinha: 0,
      Maionese: 0,
      Salsinha: 0,
      'Velho Alho': 0,
    });
    setResultCharacter(null);
    setShowResults(false);
  };

  const getPersonagemImage = (personagem) => {
    const images = {
      "Mostardinha": mostardinhaImg,
      "Maionese": maioneseImg,
      "Salsinha": salsinhaImg,
      "Velho Alho": alhoImg
    };
    return images[personagem] || "/assets/images/default.png";
  };

  return (
    <section id="quiz" className="section quiz-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">🎭 Quiz Emocional</h2>
          <p className="section-subtitle">Descubra qual personagem de Temperópolis é você!</p>
        </div>

        {!showResults ? (
          <div className="quiz-container fade-in-up">
            <div className="question-box">
              <h3>{quizQuestions[currentQuestion].question}</h3>
            </div>

            <div className="options-box">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${selectedAnswer === index ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                >
                  {option.text}
                </button>
              ))}
            </div>

            {selectedAnswer !== null && (
              <button
                className="next-button btn btn-primary"
                onClick={handleNextQuestion}
              >
                {currentQuestion < quizQuestions.length - 1 ? 'Próxima Pergunta' : 'Ver Resultado'}
              </button>
            )}
          </div>
        ) : (
          <div className="results-container fade-in-up">
            <h3>🎉 Parabéns! Você é o(a) {resultCharacter}!</h3>
            <img
              src={getPersonagemImage(resultCharacter)}
              alt={`Personagem ${resultCharacter}`}
              className="personagem-image"
            />
            <p>Sua personalidade se alinha mais com o(a) {resultCharacter}!</p>
            <button
              className="restart-button btn btn-secondary"
              onClick={resetQuiz}
            >
              Refazer o Quiz
            </button>
          </div>
        )}

        {showResults && (
          <div className="email-result-box">
            <p>Quer receber seu resultado por e-mail?</p>
            <form>
              <input
                type="email"
                placeholder="Seu e-mail"
                required
                className="email-input"
              />
              <button type="submit" className="send-email-button btn btn-primary">
                Enviar Resultado
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizSection;
