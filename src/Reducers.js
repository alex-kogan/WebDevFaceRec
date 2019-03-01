import {CHANGE_IMAGE_INPUT,
				FACE_DETECTION_RUNNING,
				FACE_DETECTION_SUCCESS,
				FACE_DETECTION_FAIL,
				ROUTE_CHANGE
} from './Constants.js'

const initialImageInput = {
	imageInputField: ''
};

export const imageInput = (state=initialImageInput, action={}) => {
	switch(action.type) {
		case CHANGE_IMAGE_INPUT:
			return Object.assign({}, state, {imageInputField: action.payload});
		default:
			return state;
	}
}

const initialStateDetection = {
	imageURL: '',
	isDetecting: false,
	detectedFaces: [],
	error: ''
};

export const detectionButton = (state=initialStateDetection, action={}) => {
	switch(action.type) {
		case FACE_DETECTION_RUNNING:
			return Object.assign({}, state, {imageURL: action.payload, isDetecting: true});
		case FACE_DETECTION_SUCCESS:
			return Object.assign({}, state, {detectedFaces: action.payload, isDetecting: false});
		case FACE_DETECTION_FAIL:
			return Object.assign({}, state, {error: action.payload,isDetecting: false});
		default:
			return state;
	}
}

const initialStateRoute = {
	route: 'sign_in'
}

export const appRoute = (state=initialStateRoute, action={}) => {
	switch(action.type) {
		case ROUTE_CHANGE:
			return Object.assign({}, state, {route: action.payload});
		default:
			return state;
	}
}