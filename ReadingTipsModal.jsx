import React from 'react';
import './ReadingTipsModal.css';

const ReadingTipsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>×</button>
        
        <h2 className="modal-title">✨ Como Transformar a Leitura em um Momento Mágico?</h2>
        <p className="modal-subtitle">Dicas criativas para pais, professores e toda a família, focadas em entretenimento e aprendizado.</p>

        <div className="tips-container">
          
          <div className="tip-card">
            <h3>Para Pais e Família: Conexão e Afeto</h3>
            <ul>
              <li>
                <strong>O Teatro da Voz:</strong> Use vozes diferentes para cada personagem. A imitação de sotaques ou tons engraçados prende a atenção e transforma a leitura em uma peça de teatro particular.
              </li>
              <li>
                <strong>Pausa para Imaginar:</strong> A cada página, faça uma pausa e pergunte: "O que você faria se estivesse no lugar do Mostardinha?". Isso estimula a criatividade e a empatia.
              </li>
              <li>
                <strong>Leitura Sensorial:</strong> Se a história menciona um cheiro ou um sabor, traga algo parecido para o momento. Se fala de chuva, use um borrifador de água. A experiência se torna inesquecível.
              </li>
              <li>
                <strong>Crie um Ambiente Aconchegante:</strong> Um cantinho confortável, com almofadas e boa iluminação, pode fazer toda a diferença.
              </li>
            </ul>
          </div>

          <div className="tip-card">
            <h3>Para Professores e Educadores: Aprendizado Ativo</h3>
            <ul>
              <li>
                <strong>Mapa da História:</strong> Peça aos alunos para desenharem um mapa do lugar onde a história se passa. Isso trabalha a compreensão espacial e a memória.
              </li>
              <li>
                <strong>Círculo de Emoções:</strong> Após a leitura, peça para cada criança expressar com um desenho ou uma palavra a emoção que mais sentiu. É uma ótima forma de trabalhar a inteligência emocional.
              </li>
              <li>
                <strong>Reescrita Criativa:</strong> Sugira que a turma crie um final alternativo para a história. Isso desenvolve a escrita, a argumentação e a capacidade de inovar.
              </li>
              <li>
                <strong>Conecte com a Vida Real:</strong> Ajude a criança a relacionar as emoções e situações do livro com as experiências dela.
              </li>
            </ul>
          </div>

          <div className="tip-card">
            <h3>Para a Criança: Atenção Positiva e Engajamento</h3>
            <ul>
              <li>
                <strong>O Detetive de Palavras:</strong> Antes de começar, escolha uma palavra-chave da história. Toda vez que ela aparecer, a criança deve fazer um som engraçado ou um movimento. Garante risadas e foco!
              </li>
              <li>
                <strong>Leitura em Dupla:</strong> Deixe a criança "ler" a parte das imagens, descrevendo o que vê, enquanto você lê o texto. Isso valoriza a percepção dela e a torna parte ativa da narrativa.
              </li>
              <li>
                <strong>O Cantinho Mágico:</strong> Crie um espaço especial e aconchegante (com almofadas, luzes suaves) dedicado apenas ao momento da leitura. O ambiente reforça a importância e o prazer do hábito.
              </li>
              <li>
                <strong>Seja o Exemplo:</strong> Mostre que você também gosta de ler, tendo seus próprios livros por perto.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReadingTipsModal;
