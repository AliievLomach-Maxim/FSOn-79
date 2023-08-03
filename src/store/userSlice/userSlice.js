import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		createUser: (state, { payload }) => {
			state.name = payload
		},
		updateUser(state, { payload }) {
			state.age = payload
		},
	},
})

export const userReducer = userSlice.reducer
export const { createUser, updateUser } = userSlice.actions
