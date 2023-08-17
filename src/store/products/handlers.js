export const handleFulfilledProducts = (state, { payload }) => {
	state.products = payload.products
}

export const handleFulfilledCreateProduct = (state, { payload }) => {
	state.products.unshift(payload)
}
