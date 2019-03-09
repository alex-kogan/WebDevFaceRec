import React from 'react';

import InputImage from '../../Containers/InputImage';
import FaceRecognition from '../../Containers/FaceRecognition';

import RegisterPage from '../../Components/RegisterPage/RegisterPage';
import SignInPage from '../../Components/SignInPage/SignInPage';
import Navigation from '../../Components/Navigation/Navigation';
import Logo from '../../Components/Logo/Logo';
import Rank from '../../Components/Rank/Rank';

import './App.css';

const App = ({onLoad,
              signInStatus,appRoute, userData,
              onSignInClick, onRememberMe, onSignOutClick, onRouteChange, onRegisterClick}) => {
  // to remove
    // fetch('http://localhost:3000')
    //   .then(response => response.json())
    //   .then(data => console.log(data))

  // begin routing
  const appBody = (route) => {
    switch (route) {
      case 'sign_in':
        onLoad()
        return <SignInPage onSignInClick={onSignInClick} onRouteChange={onRouteChange} onRememberMe={onRememberMe}/>;
      case 'home':
        return <div>
                    <Logo/>
                    <Rank userName={userData.name} userEntries={userData.entries}/>
                    <InputImage/>
                    <FaceRecognition/>
                  </div>;
        case 'register':
          return <RegisterPage onRegisterClick={onRegisterClick}/>
        default:
          return <div></div>;
    }
  }
  // end routing          
  return <div className='AppStyle'>
      <Navigation singedIn={signInStatus} onSignOutClick={onSignOutClick} onRouteChange={onRouteChange}/>
      {appBody(appRoute)}
    </div>
  }

export default App;