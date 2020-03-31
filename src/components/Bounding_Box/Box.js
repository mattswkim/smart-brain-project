import React from 'react';
import './Box.css';

const Box = ({ bounding_box }) => {

  const clarifaiFace = bounding_box;
  const image = document.getElementById('inputimage');
  const width = Number(image.width);
  console.log("width");
  const height = Number(image.height);
  const box = {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height)
}
  return (
    console.log("width"),
    <div 
      className='bounding-box' 
      style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}
    }>     
    </div>
    )
} 


export default Box;