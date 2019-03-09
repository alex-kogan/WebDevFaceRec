import {appConstants} from '../Constants.js'

const initialStateSignInStatus = {
	signInStatus: false,
	rememberMeStatus: false
}

export const signInStatus = (state=initialStateSignInStatus, action={}) => {
	switch(action.type) {
		case appConstants.SIGN_IN:
			return Object.assign({}, state, {signInStatus: action.payload});
		case appConstants.SIGNIN_FAIL:
			return Object.assign({}, state, {signInStatus: action.payload});
		case appConstants.REMEMBER_ME:
			return Object.assign({}, state, {rememberMeStatus: action.payload});
		case appConstants.REGISTER:
			return Object.assign({}, state, {signInStatus: action.payload});
		case appConstants.SIGN_OUT:
			return Object.assign({}, state, {signInStatus: action.payload});
		default:
			return state;
	}
}