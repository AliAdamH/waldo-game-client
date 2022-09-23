import React from 'react';
import { useParams } from 'react-router-dom';
const Image = (props) => {
  const { id } = useParams();

  // 1 - On mount we should fetch the image
  // 2 - add a timer to show in the page.
  // 3 - The image should be lisible here.

  return (
    <>
      <h1>Hello from Image {id} </h1>
    </>
  );
};

export default Image;
