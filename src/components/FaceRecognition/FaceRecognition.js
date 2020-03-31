import React from 'react';
import './FaceRecongnition.css';
import Box from '../Bounding_Box/Box.js';


const FaceRecognition = ({ imageUrl, bounding }) => {
  console.log("we are here")
  return (
    <div className='center ma'> 
      <div className='absolute ma2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
        <div>
        {
          bounding.map((box,i) => {
            return (
              console.log(box.region_info.bounding_box),
              <Box 
                bounding_box={box.region_info.bounding_box}
              />
            );
          }) 
        }
        </div>
      </div>
    </div>
  );
} 
export default FaceRecognition;