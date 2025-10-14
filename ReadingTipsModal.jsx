import React from 'react';
import './ReadingTipsModal.css'; // Criaremos este arquivo de CSS em seguida

const ReadingTipsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>&times;</button>
        <h2 className="modal-title">💡 Dicas para um Momento Mágico de Leitura!</h2>
        <div className="modal-body">
          <p>Transforme a leitura do Mostardinha em uma experiência inesquecível com estas dicas:</p>
          <ul>
            <li><strong>Escolha o Momento Certo:</strong> Encontre um momento tranquilo do dia, longe de distrações, para se dedicar à leitura.</li>
            <li><strong>Crie um Ambiente Aconchegante:</strong> Um cantinho confortável, com almofadas e boa iluminação, pode fazer toda a diferença.</li>
            <li><strong>Use a Voz e a Expressão:</strong> Varie o tom de voz para cada personagem, faça caretas e use gestos para dar vida à história.</li>
            <li><strong>Faça Perguntas:</strong> Pause a leitura e pergunte ao seu filho o que ele acha que vai acontecer, ou o que ele sentiu com a cena.</li>
            <li><strong>Conecte com a Vida Real:</strong> Ajude a criança a relacionar as emoções e situações do livro com as experiências dela.</li>
            <li><strong>Deixe a Criança Participar:</strong> Peça para ela virar as páginas, apontar as figuras ou até mesmo "ler" algumas palavras.</li>
            <li><strong>Releia os Favoritos:</strong> Crianças adoram repetição! Releia as histórias favoritas quantas vezes forem pedidas.</li>
            <li><strong>Seja o Exemplo:</strong> Mostre que você também gosta de ler, tendo seus próprios livros por perto.</li>
          </ul>
          <p>A leitura é uma ponte para o mundo da imaginação e um poderoso elo entre pais e filhos. Aproveite cada instante!</p>
        </div>
      </div>
    </div>
  );
};

export default ReadingTipsModal;

