import { createSlice } from '@reduxjs/toolkit'

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

const initialState = {
	isLoading: false,
	error: '',
}

const rootSlice = createSlice({
	name: 'root',
	initialState,
	extraReducers: (builder) =>
		builder
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

export const rootReducer = rootSlice.reducer
