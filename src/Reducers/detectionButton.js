import {appConstants} from '../Constants.js'

const initialStateDetection = {
	imageURL: '',
	isDetecting: false,
	detectedFaces: [],
	error: ''
};

export const detectionButton = (state=initialStateDetection, action={}) => {
	switch(action.type) {
		case appConstants.FACE_DETECTION_RUNNING:
			return Object.assign({}, state, {imageURL: action.payload, isDetecting: true});
		case appConstants.FACE_DETECTION_SUCCESS:
			return Object.assign({}, state, {detectedFaces: action.payload, isDetecting: false});
		case appConstants.FACE_DETECTION_FAIL:
			return Object.assign({}, state, {error: action.payload, detectedFaces: [], isDetecting: false});
		default:
			return state;
	}
}