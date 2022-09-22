import React from 'react';
import ImageList from '../ImageList/ImageList';
import waldoChars from '../../waldo-logo.png';
import './Home.css';

const Home = (props) => {
  return (
    <>
      <header className="header">
        <h1 class="header__title">Where's Waldo Game</h1>
        <p class="header__text">
          Will you find Wally characters in the shortest amount of time ?
        </p>
        <img
          src={waldoChars}
          alt=""
          aria-hidden="true"
          className="header__characters"
        />
        <button className="header__start-btn">🕵️ PLAY</button>
      </header>
      <h1>Hello this is the App component</h1>
      <ImageList />
    </>
  );
};

export default Home;
