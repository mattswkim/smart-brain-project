import React from 'react';

const Navigation = ({ onRouteChange }) => {
  return (
    <nav className='ma4 mt0' style={{display: 'flex', justifyContent: 'flex-end'}}>
      <p 
      onClick={onRouteChange}
      className="f4 dim black pa2 pointer"
      >Sign Out</p>
    </nav>
  );
}

export default Navigation; 