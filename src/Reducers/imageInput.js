import {appConstants} from '../Constants.js'

const initialImageInput = {
	imageInputField: './clear.png'
};

export const imageInput = (state=initialImageInput, action={}) => {
	switch(action.type) {
		case appConstants.CHANGE_IMAGE_INPUT:
			return Object.assign({}, state, {imageInputField: action.payload});
		default:
			return state;
	}
}