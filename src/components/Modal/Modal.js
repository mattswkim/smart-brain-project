import React from 'react'
import Modal from 'react-bootstrap/Modal';



const VerticallyCenteredModal = (props) => {
const real_data = props.predicted_data.data
  // const gender = (props) => {
  //   if (real_data.concepts[20].name == "feminine") {
  //     return "Female"
  //   } else {
  //     return "Male"
  //   }
  // }
  
  return ( 
    
    <Modal
    {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    {console.log(real_data.concepts[20].name)}
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          {props.index + 1}
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <h5>Data&nbsp;&nbsp;Accuracy</h5>
        <h6>Gender: </h6>
        <span>{real_data.concepts[20].name} ({Math.round(real_data.concepts[20].value*10000, 2)/100}%)<br/></span>
        <br/><h6>Age:</h6>
        <span>{real_data.concepts[0].name} ({Math.round(real_data.concepts[0].value*10000, 2)/100}%)<br/></span>
        <span>{real_data.concepts[1].name} ({Math.round(real_data.concepts[1].value*10000, 2)/100}%)</span><br/>
        <span>{real_data.concepts[2].name} ({Math.round(real_data.concepts[2].value*10000, 2)/100}%)</span><br/>
        <span>{real_data.concepts[1].name} ({Math.round(real_data.concepts[1].value*10000, 2)/100}%)</span><br/>
        <br/><h6>Cultural Background: </h6>
        <span>{real_data.concepts[22].name} ({Math.round(real_data.concepts[22].value*10000, 2)/100}%)</span><br/>
        <span>{real_data.concepts[23].name} ({Math.round(real_data.concepts[23].value*10000, 2)/100}%)</span><br/>
        <span>{real_data.concepts[24].name} ({Math.round(real_data.concepts[24].value*10000, 2)/100}%)</span><br/>
        <span>{real_data.concepts[25].name} ({Math.round(real_data.concepts[25].value*10000, 2)/100}%)</span><br/>
        <span>{real_data.concepts[26].name} ({Math.round(real_data.concepts[26].value*10000, 2)/100}%)</span><br/>
        <span>{real_data.concepts[27].name} ({Math.round(real_data.concepts[27].value*10000, 2)/100}%)</span><br/>
        <span>{real_data.concepts[28].name} ({Math.round(real_data.concepts[28].value*10000, 2)/100}%)</span><br/>


      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default VerticallyCenteredModal;