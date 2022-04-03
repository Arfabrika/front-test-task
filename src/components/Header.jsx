import React from 'react';
import '../style/App.css'

const Header = () => {
  return (
    <div className="header_common">
      <div className="header"> Наши топ-блогеры</div>
      <div className="introduction">
         <div style={{marginLeft: 20}}> Лучшие специалисты в своем деле,</div>
         <div> средний опыт работы в профессии - 27 лет</div>
      </div>
    </div>
  );
};

export default Header;