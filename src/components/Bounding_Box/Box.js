import React from 'react';
import './Box.css';


const Box = ({ prediction_data }) => {

  const clarifaiFace = prediction_data.region_info.bounding_box;
  const image = document.getElementById('inputimage');
  const width = Number(image.width);
  const height = Number(image.height);
  const box = {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height)
}
  return (
    <div 
      className='bounding-box' 
      style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}
    }>
      <div className='bounding-box-concepts'>
        <div className='bounding-box__concept'>
          <span className='concept__name'>{prediction_data.data.face.gender_appearance.concepts[0].name}</span>
          <span className="concept__prediction-val">{Math.round(prediction_data.data.face.gender_appearance.concepts[0].value*10000, 2)/100}%</span>
        </div>
      </div>
    </div>
    )
} 


export default Box;