import React from 'react';
import Waldo from '../../Images/waldo.png';
import Wizard from '../../Images/wizard.png';
import Wilma from '../../Images/wilma.png';
import Odlaw from '../../Images/odlaw.png';
import './CharacterList.css';
const CharacterList = () => {
  return (
    <div className="characters">
      <div className="character">
        <img src={Waldo} alt="Waldo" />
      </div>
      <div className="character">
        <img src={Wizard} alt="Wizard" />
      </div>
      <div className="character">
        <img src={Wilma} alt="Wilma" />
      </div>
      <div className="character">
        <img src={Odlaw} alt="Odlaw" />
      </div>
    </div>
  );
};

export default CharacterList;
