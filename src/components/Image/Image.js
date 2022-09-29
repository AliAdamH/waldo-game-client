import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterList from '../CharacterList/CharacterList';
import Space from '../../playgrounds/space.jpg';
import Notification from '../notification/Notification';

const Image = (props) => {
  const { id } = useParams();
  const [imageURL, setImageUrl] = useState('');
  const [charactersFound, setCharactersFound] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [openNotification, setOpenNotification] = useState(false);

  useEffect(() => {
    // on component mount I want you to fetch the image from the server.
  }, []);

  useEffect(() => {
    if (charactersFound.length === 4) {
      // code to finish the game
    }
  }, [charactersFound]);

  const isValidCharacter = (clientPosition) => {
    // send this data to the backend but also throttle/debounce the calling function.
    // Example of a true response
    let response = {
      Waldo: true,
    };

    // Add the character if it's not already there.
    for (let key in response) {
      if (response[key]) {
        if (!charactersFound.includes(key)) {
          setCharactersFound((prev) => {
            return [...prev, key];
          });

          setCurrentCharacter(key);
        }
      }
    }
  };

  const handleImageClick = (e) => {
    //debounce this one.
    const { width, height } = e.target.getBoundingClientRect();
    let positionObject = {
      height: e.offsetY / height,
      width: e.offsetX / width,
    };

    isValidCharacter(positionObject);
  };

  const testNotification = () => {
    setCurrentCharacter('hello');
    setOpenNotification(true);
  };
  return (
    <>
      <button onClick={testNotification}>Click me</button>
      <h1> &larr; Hello from Image {id} </h1>
      <CharacterList />
      <div className="landscape">
        <img
          onClick={handleImageClick}
          src={Space}
          alt="Waldo landscape"
          id="playground"
        />
      </div>
      {openNotification && (
        <Notification
          text={currentCharacter}
          dismount={() => setOpenNotification(false)}
        />
      )}
    </>
  );
};

export default Image;
