import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CharacterList from '../CharacterList/CharacterList';
import Timer from '../Timer/Timer';
import Notification from '../notification/Notification';
import VictoryModal from '../VictoryModal/VictoryModal';
import debounce from 'lodash.debounce';
import './Image.css';

const Image = (props) => {
  const { id } = useParams();
  const [imageURL, setImageUrl] = useState('');
  const score = useRef(0);
  const [openTimer, setOpenTimer] = useState(true);
  const [activeNotifications, setActiveNotifications] = useState([]);
  const [charactersFound, setCharactersFound] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState('');
  const [openVictoryModal, setOpenVictoryModal] = useState(false);

  useEffect(() => {
    // on component mount I want you to fetch the image from the server.
    fetch('http://localhost:3000/api/v1/images/' + id)
      .then((response) => response.json())
      .then((data) => setImageUrl(data.landscape_url));
  }, []);

  useEffect(() => {
    if (charactersFound.length === 4) {
      setOpenTimer(false);
      setOpenVictoryModal(true);
    }
    console.log(charactersFound);
  }, [charactersFound]);

  const requestCoordValidity = (position) => {
    console.log(position);
    let { width, height } = position;
    fetch(
      'http://localhost:3000/api/v1/verify?' +
        new URLSearchParams({
          id,
          width,
          height,
        })
    )
      .then((response) => response.json())
      .then((data) => setCurrentCharacter(data.found))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (currentCharacter !== '') {
      if (!charactersFound.includes(currentCharacter)) {
        setActiveNotifications((prev) => {
          return [
            ...prev,
            <Notification
              text={currentCharacter}
              dismount={handleNotificationRemoval}
            />,
          ];
        });
        setCharactersFound((prev) => {
          return [...prev, currentCharacter];
        });
      }
    }
  }, [currentCharacter]);

  const handleImageClick = (e) => {
    //debounce this one.
    const { width, height } = e.target.getBoundingClientRect();
    let positionObject = {
      height: (e.nativeEvent.offsetY / height).toFixed(3),
      width: (e.nativeEvent.offsetX / width).toFixed(3),
    };
    requestCoordValidity(positionObject);
  };

  const debounceImageClickHandling = useMemo(
    () => debounce(handleImageClick, 250),
    []
  );

  const handleNotificationRemoval = () => {
    setActiveNotifications((prev) => {
      return prev.filter((_, index) => index !== 0);
    });
  };

  return (
    <>
      <div className="image-header">
        <Link className="back-link" to="/images">
          {' '}
          &larr; Back to images
        </Link>
        <CharacterList checkedCharacters={charactersFound} />
        {openTimer && <Timer score={score} />}
      </div>
      <div className="landscape">
        <img
          onClick={debounceImageClickHandling}
          src={imageURL}
          alt="Waldo landscape"
          id="playground"
        />
      </div>
      {/* {openNotification && (
        <Notification
          text={currentCharacter}
          dismount={() => setOpenNotification(false)}
        />
      )} */}
      <>{activeNotifications}</>

      {openVictoryModal && (
        <VictoryModal
          imageId={id}
          // Just to test the value, remove later.
          timeTaken={score.current}
        />
      )}
    </>
  );
};

export default Image;
