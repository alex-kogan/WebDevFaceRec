import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import {imageInput, detectionButton, appRoute, signInStatus} from './Reducers.js'

const logger = createLogger();
const rootReducer = combineReducers ({imageInput, detectionButton, appRoute, signInStatus});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(<Provider store={store}>
					<App/>
				</Provider>
				,document.getElementById('root'));

serviceWorker.unregister();
