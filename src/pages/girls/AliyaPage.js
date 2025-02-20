import React from 'react';
import './girlsCss/Aliya.css';


function AliyaPage() {
  return (
    <div className="girl-page">
      <h2>Поздравление для Алия</h2>
      <p>Дорогая Алия, поздравляю тебя с 8 Марта!</p>
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

export default AliyaPage;