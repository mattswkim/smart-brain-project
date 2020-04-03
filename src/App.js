import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
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
      prediction: [],
      route: 'signin',
      isSignedIn: false
    }
  }


  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
      Clarifai.DEMOGRAPHICS_MODEL, 
      this.state.input
    )
      .then(response => {
        this.setState({prediction: response.outputs[0].data.regions})
        // this.setState({gender: gender.push(bounding[0].data.face.gender.concepts[0])})
        this.state.prediction.forEach(function (element, i) {
          console.log(element.data.face.gender_appearance.concepts[0].name)
          console.log(element.data.face.gender_appearance.concepts[0].value*100)
        });
        // console.log(this.state.gender);
        // this.displayFaceBox(this.calculateFaceLocation(temp[1]))
        console.log(this.state.prediction);
        }
      )
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if ( route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, imageUrl, route, prediction } = this.state;
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
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/> 
        </div>
        { route === 'home'  
          ? <div>
              {/* <Rank /> */}
              <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition 
                prediction={prediction}
                imageUrl={imageUrl}
              />
            </div>
          : (
            route === 'signin'
            ? <Signin onRouteChange={this.onRouteChange}/>
            : <Signup onRouteChange={this.onRouteChange}/>
          )
        }
        
        
      </div>
    );
  }
}

export default App;


// old codes
  // calculateFaceLocation = (bounding_box) => {
  //   const clarifaiFace = bounding_box;
  //   const image = document.getElementById('inputimage');
  //   const width = Number(image.width);
  //   const height = Number(image.height);
  //   return {
  //     leftCol: clarifaiFace.left_col * width,
  //     topRow: clarifaiFace.top_row * height,
  //     rightCol: width - (clarifaiFace.right_col * width),
  //     bottomRow: height - (clarifaiFace.bottom_row * height)
  //   }
  // }

  // displayFaceBox = (box) => {
  //   this.setState({box: box});
  // }