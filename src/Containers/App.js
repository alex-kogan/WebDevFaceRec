import React, { Component } from 'react';
import {connect} from 'react-redux';
import Navigation from '../Components/Navigation/Navigation';
import Logo from '../Components/Logo/Logo';
import ImageLinkForm from '../Components/ImageLinkForm/ImageLinkForm';
import Rank from '../Components/Rank/Rank';
import FaceRecognition from '../Components/FaceRecognition/FaceRecognition';
import SignInPage from '../Components/SignInPage/SignInPage';
import Register from '../Components/Register/Register';
import './App.css';

import {setImageInput, detectImage, routeChange, signIn, signOut} from '../Actions.js'

const mapStateToProps = (state) => {
  return {
    imageInput: state.imageInput.imageInputField,  // state holds the method searchRobots (as a reducres) which holds the method searchField once more reducers are added we need to name from which one we need the state
    imageURL: state.detectionButton.imageURL,
    isDetecting: state.detectionButton.isDetecting,
    detectedFace: state.detectionButton.detectedFaces,
    detectionError: state.detectionButton.error,
    appRoute: state.appRoute.route,
    signedIn: state.signInStatus.signIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (event) => dispatch (setImageInput(event.target.value)),
    onDetectClick: () => dispatch(detectImage()),
    onSignInClick: () => dispatch(signIn()),
    onSignOutClick: () => dispatch(signOut()),
    onRouteChange: (event) => dispatch(routeChange(event.target.title))
  }
}

class App extends Component {
  render() {
    const {onInputChange,
          onDetectClick, imageURL, isDetecting, detectedFace, detectionError,
          onSignInClick, onSignOutClick, onRouteChange,
          appRoute, signedIn} = this.props;
    // routing
    const appBody = (appRoute) => {
      switch (appRoute) {
        case 'sign_in':
          return <SignInPage onSignInClick={onSignInClick} onRouteChange={onRouteChange}/>;
        case 'home':
          return <div>
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
                    </div>;
          case 'register':
            return <Register onSignInClick={onSignInClick}/>
          default:
            return <div></div>;
      }
    }
    // end routing          
    return (
      <div className="App">
        <Navigation onSignOutClick={onSignOutClick} singedIn={signedIn} onRouteChange={onRouteChange}/>
        {appBody(appRoute)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);