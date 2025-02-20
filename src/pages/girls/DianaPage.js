import React from 'react';
import './girlsCss/Diana.css';

function DianaPage() {
  return (
    <div className="girl-page">
      <h2>Поздравление для Диана</h2>
      <p>Дорогая Диана, поздравляю тебя с 8 Марта!</p>
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

export default DianaPage;