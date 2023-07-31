import { initialState } from './initialState'
import { CREATE_NEW_NAME, UPDATE_AGE } from './types'

export const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CREATE_NEW_NAME:
			return {
				...state,
				name: payload,
			}
		case UPDATE_AGE:
			return {
				...state,
				age: payload,
			}
		default:
			return state
	}
}
