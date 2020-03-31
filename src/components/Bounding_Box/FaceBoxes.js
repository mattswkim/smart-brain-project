import React from 'react';
import Box from './Box';

const FaceBoxes = ({bounding}) => {

  return (
    <div>
      { 
        bounding.forEach(box => {
          return (
            <Box 
              bounding_box={box.region_info.bounding_box}
            />
          );
        }) 
      }
    </div>
  );
  
}


export default FaceBoxes;