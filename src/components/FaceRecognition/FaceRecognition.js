import React from 'react';
import Box from '../Bounding_Box/Box.js';


const FaceRecognition = ({ imageUrl, prediction }) => {
  return (
    <div className='center ma'> 
      <div className='absolute ma2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
        <div>
        {
          prediction.map((eachPerson,i) => {
            return (
              console.log(eachPerson),
              <Box 
                prediction_data={eachPerson}
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