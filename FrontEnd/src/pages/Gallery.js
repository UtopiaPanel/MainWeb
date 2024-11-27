import React from 'react';
import GroupPhoto1 from '../assets/西雅图新生会Staff.jpg';

const Gallery = () => {
  return (
    <div>
      <h1>Gallery</h1>
      <p>
        <img src={GroupPhoto1} alt="Staff" style={{ width: '33.33vw' }} />
        <img src="https://via.placeholder.com/150" alt="Placeholder" title="Placeholder" />
      </p>
    </div>
  );
};

export default Gallery;
