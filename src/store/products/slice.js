import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { createProductThunk, getAllProductsThunk } from './thunks'
import {
	handleFulfilledCreateProduct,
	handleFulfilledProducts,
} from './handlers'

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setFilter(state, { payload }) {
			state.filter = payload
		},
		createProductAction: {
			reducer: (state, { payload }) => {
				state.products.unshift(payload)
			},
			prepare: (body) => {
				const newBody = {
					...body,
					rating: 5,
					category: 'smartphones',
				}
				return { payload: newBody }
			},
		},
		// createProductAction(state, { payload }) {
		// 	state.products.unshift(payload)
		// },
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllProductsThunk.fulfilled, handleFulfilledProducts)
			.addCase(createProductThunk.fulfilled, handleFulfilledCreateProduct)
		// .addMatcher(
		// 	(action) => action.type.endsWith('/fulfilled'),
		// 	handleFulfilled
		// )
		// .addMatcher(
		// 	(action) => action.type.endsWith('/pending'),
		// 	handlePending
		// )
		// .addMatcher(
		// 	(action) => action.type.endsWith('/rejected'),
		// 	handleRejected
		// )
	},
})

export const { setFilter, createProductAction } = productsSlice.actions
export const productsReducer = productsSlice.reducer
