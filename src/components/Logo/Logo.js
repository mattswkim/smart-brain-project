import React from 'react';
// import Tilt from 'react-tilt';
import brain from './Logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma3 mt1'>
      <div className='grow br2 shadow-2' options={{ max : 25}} style={{ height: 100, width: 100 }}>
        <div className="pa1">
          <img style={{paddingTop: '1px'}} alt='logo' src={ brain } />
        </div>
      </div>
    </div>
  );
}


export default Logo;