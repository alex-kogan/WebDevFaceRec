import {appConstants} from '../Constants.js'

const initialStateSignIn = {
	signIn: false
}

export const signInStatus = (state=initialStateSignIn, action={}) => {
	switch(action.type) {
		case appConstants.SIGN_IN:
			return Object.assign({}, state, {signIn: action.payload});
		case appConstants.REGISTER:
			return Object.assign({}, state, {signIn: action.payload});			
		case appConstants.SIGN_OUT:
			return Object.assign({}, state, {signIn: action.payload});
		default:
			return state;
	}
}