import {appConstants} from '../Constants.js'

const initialStateUserData = {
	id: '',
	name: '',
	email: '',
	entries: 0,
	joined: ''
}

export const userData = (state=initialStateUserData, action={}) => {
	switch(action.type) {
		case appConstants.USER_DATA_UPDATE:
			return Object.assign({}, state, {
				id: action.payload.id,
				name: action.payload.name,
				email: action.payload.email,
				entries: action.payload.entries,
				joined: action.payload.joined
			});
		default:
			return state;
	}
}