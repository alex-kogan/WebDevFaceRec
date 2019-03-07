import {appConstants} from '../Constants.js'

import {combineReducers} from 'redux'

import {imageInput} from './imageInput.js'
import {detectionButton} from './detectionButton.js'
import {appRoute} from './appRoute.js'
import {signInStatus} from './signInStatus.js'
import {userData} from './userData.js'

const appReducer = combineReducers ({imageInput, detectionButton, appRoute, signInStatus,userData});

export const rootReducer = (state, action) => {
  if (action.type === appConstants.SIGN_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
}