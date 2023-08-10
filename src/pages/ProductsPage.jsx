import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	createProductThunk,
	getAllProductsThunk,
} from '../store/products/thunks'
import Loader from '../components/Loader/Loader'
import Error from '../components/Error/Error'
import ProductsList from '../components/Products/ProductsList'
import {
	// selectSortedProducts,
	selectProducts,
	selectFilteredProducts,
} from '../store/products/selectors'
import { createProductAction, setFilter } from '../store/products/slice'
import CreateProductForm from '../components/Forms/CreateProductForm/CreateProductForm'

const ProductsPage = () => {
	const { isLoading, error } = useSelector(selectProducts)
	// const sortedProducts = useSelector(selectSortedProducts)
	const filteredProducts = useSelector(selectFilteredProducts)

	const dispatch = useDispatch()

	// const sortedProducts = useMemo(
	// 	() =>
	// 		products &&
	// 		products.toSorted((a, b) => {
	// 			console.log('sort')
	// 			for (let i = 0; i < 1000000; i++) {}
	// 			return a.price - b.price
	// 		}),
	// 	[products]
	// )

	useEffect(() => {
		dispatch(getAllProductsThunk())
	}, [dispatch])

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(setFilter(e.target[0].value))
	}

	const createProduct = (body) => {
		dispatch(createProductAction(body))
	}

	return (
		<>
			<CreateProductForm createProduct={createProduct} />
			<form className='d-flex' onSubmit={handleSubmit}>
				<input
					className='form-control me-2'
					type='text'
					placeholder='Filter'
				/>
				<button className='btn btn-outline-success' type='submit'>
					Filter
				</button>
			</form>
			{isLoading && <Loader />}
			{error && <Error message={error} />}
			{filteredProducts && <ProductsList products={filteredProducts} />}
		</>
	)
}

export default ProductsPage
