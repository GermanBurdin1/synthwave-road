import React from 'react';
import '../ShareForm.css';
import { useState } from 'react';

const ShareForm = ({ onClose }) => {
  const currentUrl = window.location.href;
  const [message, setMessage] = useState('');

  return (
    <div className="share-form">
      <div className="share-form-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Share this site</h2>
        <input type="text" value={currentUrl} readOnly />
        <textarea
          placeholder="Leave a nice message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onMouseEnter={() => setMessage('You get +10 karma points for sharing!')}
          onMouseLeave={() => setMessage('')}
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default ShareForm;
