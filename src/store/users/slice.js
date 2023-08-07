import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllUsers, getUserDetails } from '../../api/users'

const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}

const handleRejected = (state, { error }) => {
	state.isLoading = false
	state.error = error.message
}

const handleFulfilled = (state) => {
	state.isLoading = false
}

const handleFulfilledSingleUser = (state, { payload }) => {
	state.singleUser = payload
}

const handleFulfilledAllUsers = (state, { payload }) => {
	state.users = payload.users
}

const initialState = {
	users: null,
	singleUser: null,
	isLoading: false,
	error: '',
}

export const getAllUsersThunk = createAsyncThunk('users/getAllUsers', () =>
	getAllUsers()
)

export const getUserDetailsThunk = createAsyncThunk('users/searchUsers', (id) =>
	getUserDetails(id)
)

const usersSlice = createSlice({
	name: 'users',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getAllUsersThunk.fulfilled, handleFulfilledAllUsers)
			.addCase(getUserDetailsThunk.fulfilled, handleFulfilledSingleUser)
			.addMatcher(
				(action) => action.type.endsWith('/pending'),
				handlePending
			)
			.addMatcher(
				(action) => action.type.endsWith('/rejected'),
				handleRejected
			)
			.addMatcher(
				(action) => action.type.endsWith('/fulfilled'),
				handleFulfilled
			)
	},
})

// const usersSlice = createSlice({
// 	name: 'users',
// 	initialState,
// 	extraReducers: (builder) => {
// 		builder
// 			// .addCase(getAllUsersThunk.pending, handlePending)
// 			.addCase(getAllUsersThunk.fulfilled, (state, { payload }) => {
// 				state.isLoading = false
// 				state.users = payload.users
// 			})
// 			// .addCase(getAllUsersThunk.rejected, handleRejected)
// 			// .addCase(getSearchUsersThunk.pending, handlePending)
// 			.addCase(getSearchUsersThunk.fulfilled, (state, { payload }) => {
// 				state.isLoading = false
// 				state.users = payload
// 			})
// 			// .addCase(getSearchUsersThunk.rejected, handleRejected)
// 			.addMatcher(
// 				(action) => action.type.endsWith('/pending'),
// 				handlePending
// 			)
// 			.addMatcher(
// 				(action) => action.type.endsWith('/rejected'),
// 				handleRejected
// 			)
// 	},
// })

// export const getAllUsersThunk = () => {
// 	return async (dispatch) => {
// 		try {
// 			dispatch(usersSlice.actions.fetching())
// 			const data = await getAllUsers()
// 			dispatch(usersSlice.actions.success(data))
// 		} catch (error) {
// 			dispatch(usersSlice.actions.rejected(error))
// 		}
// 	}
// }

// export const getAllUsersThunk = createAsyncThunk(
// 	'users/getAllUsers',
// 	async (_, { rejectWithValue }) => {
// 		try {
// 			return await getAllUsers()
// 		} catch (error) {
// 			return rejectWithValue(error.response.data)
// 			// return rejectWithValue(error)
// 		}
// 	}
// )
// export const getAllUsersThunk = createAsyncThunk('users/getAllUsers', () =>
// 	getAllUsers()
// )

// const usersSlice = createSlice({
// 	name: 'users',
// 	initialState,
// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(getAllUsersThunk.pending, (state) => {
// 				state.isLoading = true
// 				state.error = ''
// 			})
// 			.addCase(getAllUsersThunk.fulfilled, (state, { payload }) => {
// 				state.isLoading = false
// 				state.users = payload.users
// 			})
// 			.addCase(getAllUsersThunk.rejected, (state, { error }) => {
// 				// console.log('payload :>> ', action)
// 				state.isLoading = false
// 				state.error = error.message
// 			})
// 		// .addCase(getAllUsersThunk.rejected, (state, { payload }) => {
// 		// 	state.isLoading = false
// 		// 	state.error = payload.message
// 		// })
// 	},
// })
// const usersSlice = createSlice({
// 	name: 'users',
// 	initialState,
// 	extraReducers: {
// 		[getAllUsersThunk.pending]: (state) => {
// 			state.isLoading = true
// 			state.error = ''
// 		},
// 		[getAllUsersThunk.fulfilled]: (state, { payload }) => {
// 			state.isLoading = false
// 			state.users = payload.users
// 		},
// 		[getAllUsersThunk.rejected]: (state, { payload }) => {
// 			state.isLoading = false
// 			state.error = payload.message
// 		},
// 	},
// })
// const usersSlice = createSlice({
// 	name: 'users',
// 	initialState,
// 	reducers: {
// fetching(state) {
// 	state.isLoading = true
// 	state.error = ''
// },
// success(state, { payload }) {
// 	state.isLoading = false
// 	state.users = payload.users
// },
// rejected(state, { payload }) {
// 	state.isLoading = false
// 	state.error = payload.message
// },
// 	},
// })

export const usersReduser = usersSlice.reducer
