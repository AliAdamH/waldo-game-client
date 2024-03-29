import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../constants';
import './VictoryModal.css';

const VictoryModal = ({ imageId, timeTaken }) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (hasSubmitted) {
      navigate('/images');
    }
  }, [hasSubmitted, navigate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();

    data.append('score[player]', e.target.player.value);
    data.append('score[image_id]', `${imageId}`);
    data.append('score[game_duration]', `${timeTaken}`);
    submitToAPI(data);
  };

  const submitToAPI = (data) => {
    fetch(API_BASE_URL + 'scores', {
      method: 'post',
      body: data,
    })
      .then(() => {
        setHasSubmitted(true);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="victory-modal">
      <div className="victory-modal__content">
        <h1> You won ! with a score of {timeTaken} seconds</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="player">Enter your name: </label>
            <input type={'text'} id="player" name="player" />
          </div>
          <button className="submit-btn" type={'submit'}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default VictoryModal;
