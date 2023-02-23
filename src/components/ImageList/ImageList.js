import React, { useEffect, useState } from 'react';
import './ImageList.css';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../constants';
const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(API_BASE_URL + '/images')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setImages(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1 className="title">
        Choose a <span className="fancy-waldo-text">Waldo</span> landscape{' '}
      </h1>
      <div className="container">
        {images.map((image, index) => {
          return (
            <Link key={index} to={image.id}>
              <div className="list-item">
                <img
                  src={image.attributes.thumbnail_url}
                  alt="Waldo Playground"
                />
                <div className="list-item__info">
                  <p className="list-item__info__title">
                    {image.attributes.title} <br />{' '}
                    {image.attributes.best_score ? (
                      <>
                        <small>
                          Current Record:{' '}
                          {image.attributes.best_score.game_duration} seconds
                        </small>
                        <br />
                        <small>
                          Player: {image.attributes.best_score.player || '-'}
                        </small>
                      </>
                    ) : (
                      <small>No Registered Game</small>
                    )}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ImageList;
