import React from 'react';
import './MainPages.css';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className="main-page">
      <div className="content">
        <h1>С 8 Марта, наши дорогие!</h1>
        <p>Поздравляем с прекрасным весенним праздником!</p>
        
        <div className="button-container">
          <Link to="/diana"><button>Поздравление для Дианы</button></Link>
          <Link to="/dana"><button>Поздравление для Даны</button></Link>
          <Link to="/nargiza"><button>Поздравление для Наргизы</button></Link>
          <Link to="/sabina"><button>Поздравление для Сабины</button></Link>
          <Link to="/aliya"><button>Поздравление для Алии</button></Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;