import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit}) => {
  return (
    <div>
      <p className="f3">
        {'What Does AI Think of You? '}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input 
            className='f4 pa2 w-70 center' 
            type="text" 
            placeholder={'Input image URL with human face'}
            onChange={onInputChange}
          />
          <button 
          className='w-30 dim f4 link ph3 pv2 dib white bg-green'
          onClick={onButtonSubmit}
          >Detect</button>
        </div>
        </div>
    </div>
  )
}

export default ImageLinkForm;