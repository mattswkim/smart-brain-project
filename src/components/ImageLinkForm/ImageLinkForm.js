import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit}) => {
  return (
    <div>
      <p className="f3">
        {'What Does the AI Think of You? '}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
         <input className='f4 pa2 w-70 center' type="text" onChange={onInputChange}/>
          <button 
          className='w-30 dim f4 link ph3 pv2 dib white bg-light-purple'
          onClick={onButtonSubmit}
          >Detect</button>
        </div>
        </div>
    </div>
  )
}

export default ImageLinkForm;