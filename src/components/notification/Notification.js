import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Notification.css';

const Notification = ({ text, dismount }) => {
  // remove the notification after ~ 4 seconds.
  useEffect(() => {
    let timeout = setTimeout(() => {
      dismount();
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return createPortal(
    <>
      <div className="notification"> &#10003; &nbsp; You found: {text} </div>
    </>,
    document.body
  );
};

export default Notification;
