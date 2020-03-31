import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
// import Rank from './components/Rank/Rank';
import './App.css';


const app = new Clarifai.App({
  apiKey: '6f44191d531140ceb02d1b54ab54d560'
});

const particlesOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }  
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      bounding: [],
      age:'',
      gender: '',
      multicultural: ''
    }
  }

  calculateFaceLocation = (bounding_box) => {
    const clarifaiFace = bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({input: event.target.value})
  }

  pushArray = (array) => {
    let temp = {};
    array.forEach(element => {
      temp.push(element)
      console.log(temp)
    })
    return temp;
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
      Clarifai.DEMOGRAPHICS_MODEL, 
      this.state.input
    )
      .then(response => {
        this.setState({bounding: response.outputs[0].data.regions})
        // this.setState({gender: gender.push(bounding[0].data.face.gender.concepts[0])})
        this.state.bounding.forEach(function (element, i) {
          console.log(element.region_info.bounding_box, i); 
          console.log(element.data.face.gender_appearance.concepts[0].name)
          console.log(element.data.face.gender_appearance.concepts[0].value*100 + "%")
        });
        // console.log(this.state.gender);
        // this.displayFaceBox(this.calculateFaceLocation(temp[1]))
        console.log(this.state.bounding);
        }
      )
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <Particles
          className='particles'
          params={particlesOptions}
        />
        <div className='fl w-30'>
          <Logo />
        </div>
          <div className='fl w-70'>
        <Navigation /> 
        </div>
        {/* <Rank /> */}
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition 
          bounding={this.state.bounding}
          imageUrl={this.state.imageUrl}
        />
      </div>
    );
  }
}

export default App;
