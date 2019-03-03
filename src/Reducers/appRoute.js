import {appConstants} from '../Constants.js'

const initialStateRoute = {
	route: 'sign_in'
}

export const appRoute = (state=initialStateRoute, action={}) => {
	switch(action.type) {
		case appConstants.ROUTE_CHANGE:
			return Object.assign({}, state, {route: action.payload});
		default:
			return state;
	}
}