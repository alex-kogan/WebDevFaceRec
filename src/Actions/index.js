import {appConstants} from '../Constants.js';

//import Clarifai from 'calrifai';

const Clarifai = require('clarifai');

const serverAddress = 'http://localhost:3000/';

export const setImageInput = (imageURL) => ({
	type: appConstants.CHANGE_IMAGE_INPUT,
	payload: imageURL
});

const app = new Clarifai.App({
 apiKey: 'ce8100db09544811ac8065c0fe62f8bc'
});

const calcFaceLoaction = (response) => {
	const inputImage = document.getElementById('inputImage')
	const imageWidth = Number(inputImage.width);
	const imageHeight = Number(inputImage.height);

	const boxArray = response.outputs[0].data.regions.map(region => {
		const clarifaiFace = region.region_info.bounding_box;
		const boundingBox = {
			leftCol: clarifaiFace.left_col * imageWidth,
			topRow: clarifaiFace.top_row * imageHeight,
			rightCol: imageWidth - (clarifaiFace.right_col * imageWidth),
			bottomRow: imageHeight - (clarifaiFace.bottom_row * imageHeight)
		}
		return boundingBox;
	});

	return boxArray;
}

export const detectImage = () => (dispatch, getState) => {
	const userData = getState().userData;
	const imageInputField = getState().imageInput.imageInputField;
	dispatch({type: appConstants.FACE_DETECTION_RUNNING, payload: imageInputField});
	app.models.predict(Clarifai.FACE_DETECT_MODEL, imageInputField)
	.then((response) => {return calcFaceLoaction(response)})
	.then((faceLocation) => {
		dispatch({type: appConstants.FACE_DETECTION_SUCCESS, payload: faceLocation});
		fetch(serverAddress+'image', {
			method: 'put',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				id: userData.id
			})
		})
		.then(response => response.json())
		.then(count => {
			Object.assign(userData, {entries: count});
			dispatch ({type: appConstants.USER_DATA_UPDATE, payload: userData});
		})
	})
  .catch(error => dispatch({type: appConstants.FACE_DETECTION_FAIL, payload: error}));
};

//this is like writing function detectImage ()
// {
	// 	xxx = function (dispatch)
	// {
	// 		dispatch...	
	// }
// 	return xxx
// }

export const routeChange = (destination) => {
	return ({type: appConstants.ROUTE_CHANGE, payload: destination});
};

export const signIn = (data) => (dispatch) => {
	fetch(serverAddress+'signin', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			email: data.email,
			password: data.password
		})
	})
	.then(response => response.json())
	.then(user => {
		if (user) {
			dispatch ({type: appConstants.SIGN_IN, payload: true});
			dispatch ({type: appConstants.USER_DATA_UPDATE, payload: user});
			dispatch ({type: appConstants.ROUTE_CHANGE, payload: 'home'});
		}
	})
};

export const register = (data) => (dispatch) =>  {
	fetch(serverAddress+'register', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			email: data.email,
			password: data.password,
			name: data.name
		})
	})
	.then(response => response.json())
	.then(user => {
		if (user) {
			dispatch ({type: appConstants.REGISTER, payload: true});
			dispatch ({type: appConstants.USER_DATA_UPDATE, payload: user});
			dispatch ({type: appConstants.ROUTE_CHANGE, payload: 'home'});
		}
	})
};

export const signOut = () => (dispatch) => {
	dispatch ({type: appConstants.SIGN_OUT, payload: false});
	dispatch ({type: appConstants.ROUTE_CHANGE, payload: 'sign_in'});
};