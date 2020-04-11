import React from 'react';
import './Box.css';
import VerticallyCenteredModal from '../Modal/Modal'


const Box = ({ prediction_data, index }) => {
  const [modalShow, setModalShow] = React.useState(false);

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
    <div>
      <div 
        className='bounding-box' 
        onClick={() => setModalShow(true)}
        style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}
        
      }>
        <div className='bounding-box-concepts'>
          <div className='bounding-box__concept'>
            <span className='concept__name'>{index+1}. {prediction_data.data.concepts[20].name}</span>
            {/* <span className="concept__prediction-val">{Math.round(prediction_data.data.concepts[20].value*10000, 2)/100}%</span> */}
          </div>
        </div>
      </div>
      <VerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          predicted_data={prediction_data}
          index={index}
      />
    </div>
    )
} 


export default Box;