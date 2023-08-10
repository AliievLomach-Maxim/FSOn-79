export const handleFulfilledProducts = (state, { payload }) => {
	state.products = payload.products
}

export const handleFulfilledCreateProduct = (state, { payload }) => {
	state.products.unshift(payload)
}

export const handleFulfilled = (state) => {
	state.isLoading = false
}

export const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}

export const handleRejected = (state, { error }) => {
	state.isLoading = false
	state.error = error.message
}
