import React from 'react';
import './girlsCss/Sabina.css';

function SabinaPage() {
  return (
    <div className="girl-page">
      <h2>Поздравление для Сабина</h2>
      <p>Дорогая Сабина, поздравляю тебя с 8 Марта!</p>
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

export default SabinaPage;