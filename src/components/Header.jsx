import React from 'react';
import '../style/App.css'

const Header = () => {
  return (
    <div>
      <h1 className="header"> Наши топ-блоггеры</h1>
      <div className="introduction">
         <div style={{marginLeft: 20}}> Лучшие специалисты в своем деле,</div>
         <div> средний опыт работы в профессии - 27 лет</div>
      </div>
    </div>
  );
};

export default Header;