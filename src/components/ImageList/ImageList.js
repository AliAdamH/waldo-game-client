import React from 'react';
import './ImageList.css';
import cardImage from '../../card-img.jpg';
import { Link } from 'react-router-dom';
const ImageList = (props) => {
  return (
    <>
      <h2>This is the image list component</h2>
      <div className="container">
        <Link to="1">
          <div className="list-item">
            <img src={cardImage} alt="Waldo Playground" />
            <div className="list-item__info">
              <p className="list-item__info__title">
                The Party <br /> <small>Current Record: 0.05s</small>
                <br />
                <small>Player: SomePlayerName</small>{' '}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ImageList;
