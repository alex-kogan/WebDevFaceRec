import React from 'react';

import InputImage from '../../Containers/InputImage';
import FaceRecognition from '../../Containers/FaceRecognition';
import SignInPage from '../../Containers/SignInPage/SignInPage';
import RegisterPage from '../../Containers/RegisterPage/RegisterPage';

import Navigation from '../../Components/Navigation/Navigation';
import Logo from '../../Components/Logo/Logo';
import Rank from '../../Components/Rank/Rank';


import './App.css';

const App = ({signedIn,appRoute, onSignOutClick, onRouteChange}) => {
  // to remove
    // fetch('http://localhost:3000')
    //   .then(response => response.json())
    //   .then(data => console.log(data))

  // begin routing
  const appBody = (route) => {
    switch (route) {
      case 'sign_in':
        return <SignInPage singedIn={signedIn}/>;
      case 'home':
        return <div>
                    <Logo/>
                    <Rank/>
                    <InputImage/>
                    <FaceRecognition/>
                  </div>;
        case 'register':
          return <RegisterPage/>
        default:
          return <div></div>;
    }
  }
  // end routing          
  return <div className='AppStyle'>
      <Navigation singedIn={signedIn} onSignOutClick={onSignOutClick} onRouteChange={onRouteChange}/>
      {appBody(appRoute)}
    </div>
  }

export default App;