import React, { Component } from 'react';
import {connect} from 'react-redux';
import Navigation from '../Components/Navigation/Navigation';
import Logo from '../Components/Logo/Logo';
import ImageLinkForm from '../Components/ImageLinkForm/ImageLinkForm';
import Rank from '../Components/Rank/Rank';
import FaceRecognition from '../Components/FaceRecognition/FaceRecognition';
import './App.css';

import {setImageInput, detectImage} from '../Actions.js'

const mapStateToProps = (state) => {
  return {
    imageInput: state.imageInput.imageInputField,  // state holds the method searchRobots (as a reducres) which holds the method searchField once more reducers are added we need to name from which one we need the state
    imageURL: state.detectionButton.imageURL,
    isDetecting: state.detectionButton.isDetecting,
    detectedFace: state.detectionButton.detectedFaces,
    detectionError: state.detectionButton.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (event) => dispatch (setImageInput(event.target.value)),
    onDetectClick: () => dispatch (detectImage()) 
  }
}

class App extends Component {
  render() {
    const {onInputChange,
          onDetectClick, imageURL, isDetecting, detectedFace, detectionError} = this.props
    return (
      <div className="App">
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm
          inputChange={onInputChange}
          detectClick={onDetectClick}
        />
        <FaceRecognition
          imageURL={imageURL}
          isDetecting={isDetecting}
          detectionBoxArray={detectedFace}
          detectionError={detectionError}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);