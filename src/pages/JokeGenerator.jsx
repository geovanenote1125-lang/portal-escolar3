import React, { useState } from 'react';
import '../styles/joke-generator.css';

export default function JokeGenerator() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [jokeHistory, setJokeHistory] = useState([]);

  const fetchJoke = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      if (!response.ok) throw new Error('Failed to fetch joke');
      
      const data = await response.json();
      const fullJoke = `${data.setup} ${data.punchline}`;
      
      setJoke(fullJoke);
      setJokeHistory([...jokeHistory, fullJoke]);
    } catch (err) {
      setError('Erro ao carregar piada. Tente novamente!');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = () => {
    setJokeHistory([]);
  };

  return (
    <div className="joke-generator">
      <div className="joke-container">
        <h1>🎭 Gerador de Piadas</h1>
        <p className="subtitle">Clique no botão para ouvir uma piada aleatória</p>

        <button 
          className="joke-button" 
          onClick={fetchJoke} 
          disabled={loading}
        >
          {loading ? '⏳ Carregando...' : '😂 Gerar Piada'}
        </button>

        {error && (
          <div className="error-message">
            ❌ {error}
          </div>
        )}

        {joke && (
          <div className="joke-display">
            <h2>Sua Piada:</h2>
            <p>{joke}</p>
          </div>
        )}

        {jokeHistory.length > 0 && (
          <div className="history-section">
            <div className="history-header">
              <h3>📋 Histórico de Piadas ({jokeHistory.length})</h3>
              <button className="clear-btn" onClick={clearHistory}>
                Limpar
              </button>
            </div>
            <div className="history-list">
              {jokeHistory.map((historyJoke, index) => (
                <div key={index} className="history-item">
                  <span className="history-number">#{index + 1}</span>
                  <p>{historyJoke}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
