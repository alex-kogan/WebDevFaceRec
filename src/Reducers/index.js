import {combineReducers} from 'redux';

import {imageInput} from './imageInput.js'
import {detectionButton} from './detectionButton.js'
import {appRoute} from './appRoute.js'
import {signInStatus} from './signInStatus.js'



export const rootReducer = combineReducers ({imageInput, detectionButton, appRoute, signInStatus});