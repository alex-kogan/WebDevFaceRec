import {CHANGE_IMAGE_INPUT,
				FACE_DETECTION_RUNNING,
				FACE_DETECTION_SUCCESS,
				FACE_DETECTION_FAIL,
} from './Constants.js';

//import Clarifai from 'calrifai';

const Clarifai = require('clarifai');

export const setImageInput = (text) => ({
	type: CHANGE_IMAGE_INPUT,
	payload: text
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
	const imageInputField = getState().imageInput.imageInputField;
	dispatch({type: FACE_DETECTION_RUNNING, payload: imageInputField});
	app.models.predict(Clarifai.FACE_DETECT_MODEL, imageInputField)
	.then((response) => {return calcFaceLoaction(response)})
	.then((faceLocation) => dispatch({type: FACE_DETECTION_SUCCESS, payload: faceLocation}))
  .catch(error => dispatch({type: FACE_DETECTION_FAIL, payload: error}));
};

//this is like wrting function detectImage ()
// {
	// 	xxx = function (dispatch)
	// {
	// 		dispatch...	
	// }
// 	return xxx
// }