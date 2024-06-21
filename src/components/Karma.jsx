import React from 'react';
import '../Karma.css';

const Karma = ({ karma }) => {
  return (
    <div className="karma">
      <h2>Karma: {karma}</h2>
    </div>
  );
};

export default Karma;
