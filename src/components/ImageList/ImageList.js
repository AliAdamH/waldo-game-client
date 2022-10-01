import React, { useEffect, useState } from 'react';
import './ImageList.css';
import { Link } from 'react-router-dom';
const ImageList = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/images')
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h2>This is the image list component</h2>
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
                    <small>Current Record: 0.05s</small>
                    <br />
                    <small>Player: SomePlayerName</small>{' '}
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
