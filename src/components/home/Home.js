import React from 'react';
import waldoChars from '../../waldo-logo.png';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
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
        <Link to="/images" className="header__start-btn">
          🕵️ PLAY
        </Link>
      </header>
    </>
  );
};

export default Home;
