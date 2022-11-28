import React from 'react';
import './main.css';

function MainPage(): JSX.Element {
  return (
    <div className="main__container">
      <h1 className="main__title">Кто любит маму и папу - сдаст экзамен</h1>
      <img className="main__img" src="http://source.unsplash.com/random/600x400" alt="main__back" />
    </div>
  );
}

export default MainPage;
