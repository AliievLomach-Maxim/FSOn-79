import Product from './Product'

const ProductsList = ({ products }) => {
	return products.map((product) => (
		<Product key={product.id} product={product} />
	))
}

export default ProductsList
