import React from 'react';

import InputImage from '../../Containers/InputImage';
import FaceRecognition from '../../Containers/FaceRecognition';

import Navigation from '../../Components/Navigation/Navigation';
import Logo from '../../Components/Logo/Logo';
import Rank from '../../Components/Rank/Rank';
import SignInPage from '../../Components/SignInPage/SignInPage';
import Register from '../../Components/Register/Register';

import './App.css';

const App = ({onSignInClick, onSignOutClick, onRouteChange,signedIn,appRoute}) => {
  // begin routing
  const appBody = (route) => {
    switch (route) {
      case 'sign_in':
        return <SignInPage onSignInClick={onSignInClick} onRouteChange={onRouteChange}/>;
      case 'home':
        return <div>
                    <Logo/>
                    <Rank/>
                    <InputImage/>
                    <FaceRecognition/>
                  </div>;
        case 'register':
          return <Register onRegisterClick={onSignInClick}/>
        default:
          return <div></div>;
    }
  }
  // end routing          
  return <div className='AppStyle'>
      <Navigation onSignOutClick={onSignOutClick} singedIn={signedIn} onRouteChange={onRouteChange}/>
      {appBody(appRoute)}
    </div>
  }

export default App;