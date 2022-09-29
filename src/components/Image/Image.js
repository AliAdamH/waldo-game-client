import React from 'react';
import { useParams } from 'react-router-dom';
import CharacterList from '../CharacterList/CharacterList';
import Space from '../../playgrounds/space.jpg';
const Image = (props) => {
  const { id } = useParams();

  return (
    <>
      <h1> &larr; Hello from Image {id} </h1>
      <CharacterList />
      <div className="landscape">
        <img src={Space} alt="Waldo landscape" id="playground" />
      </div>
    </>
  );
};

export default Image;
