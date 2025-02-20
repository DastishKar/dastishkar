import React from 'react';
import './girlsCss/Dana.css';

function DanaPage() {
  return (
    <div className="girl-page">
      <h2>Поздравление для Дана</h2>
      <p>Дорогая Дана, поздравляю тебя с 8 Марта!</p>
      <p>Желаю тебе счастья, любви и весеннего настроения!</p>
      
      <div className="surprise-button">
        <button>Открыть сюрприз</button>
      </div>
      
      <div className="audio-greeting">
        {/* Добавьте сюда компонент для аудио-поздравления */}
      </div>
    </div>
  );
}

export default DanaPage;