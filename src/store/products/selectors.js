import { createSelector } from '@reduxjs/toolkit'

export const selectProducts = (state) => {
	return state.products
}

const selectFilter = (state) => state.products.filter

export const selectSortedProducts = (state) =>
	state.products.products?.toSorted((a, b) => a.price - b.price)

// export const selectFilteredProducts = (state) => {
// 	const filter = state.products.filter
// 	console.log('filter')
// 	return state.products.products?.filter((el) =>
// 		el.title.toLowerCase().includes(filter.toLowerCase())
// 	)
// }

export const selectFilteredProducts = createSelector(
	selectFilter,
	selectProducts,
	(filter, products) =>
		products.products?.filter((el) =>
			el.title.toLowerCase().includes(filter.toLowerCase())
		)
)
