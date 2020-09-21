import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  
    if (isSignedIn) {
      return (
      <nav className='ma4 mt0' style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p 
        onClick={() => onRouteChange('signout')}
        className="f4 dim black pa2 pointer"
        >Sign Out</p>
      </nav>
      )
    } else {
      return (
      <nav className='ma4 mt0' style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p 
        onClick={() => onRouteChange('signin')}
        className="f4 dim black pa2 pointer"
        >SignIn</p>
        <p 
        onClick={() => onRouteChange('signup')}
        className="f4 dim black pa2 pointer"
        >Create account</p>
      </nav>
      )
    }
}

export default Navigation; 