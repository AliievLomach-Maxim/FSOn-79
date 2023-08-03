import { createReducer } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { createUser, updateUser } from './actions'

export const userReducer = createReducer(initialState, {
	[createUser]: (state, { payload }) => ({
		...state,
		name: payload,
	}),
	[updateUser]: function (state, { payload }) {
		return {
			...state,
			age: payload,
		}
	},
	// [updateUser](state, { payload }) {
	// 	return {
	// 		...state,
	// 		age: payload,
	// 	}
	// },
})
