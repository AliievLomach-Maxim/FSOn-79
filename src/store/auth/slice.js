import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, signUpThunk } from './thunks'

const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}

const handleFulfilled = (state) => {
	state.isLoading = false
}

const handleRejected = (state, { payload }) => {
	state.isLoading = false
	state.error = payload.error
}

const handleFulfilledSignUp = (state, { payload }) => {
	state.token = payload.token
	state.profile = payload.user
}

const initialState = {
	token: '',
	isLoading: false,
	error: '',
	profile: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logOut(state) {
			state.isLoading = false
			state.error = ''
			state.token = ''
			state.profile = null
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(signUpThunk.fulfilled, handleFulfilledSignUp)
			.addCase(loginThunk.fulfilled, handleFulfilledSignUp)
			.addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
			.addMatcher(
				({ type }) => type.endsWith('/fulfilled'),
				handleFulfilled
			)
			.addMatcher(
				({ type }) => type.endsWith('/rejected'),
				handleRejected
			),
})

export const authReducer = authSlice.reducer
export const { logOut } = authSlice.actions
