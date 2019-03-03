import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import 'tachyons';

import './index.css';
import App from './Containers/Router';
import {rootReducer} from './Reducers';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(<Provider store={store}>
					<App/>
				</Provider>
				,document.getElementById('root'));

serviceWorker.unregister();
