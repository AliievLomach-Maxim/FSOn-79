const Product = ({ product }) => {
	return (
		<div className='card'>
			<div className='card-body'>
				<h4 className='card-title'>{product.title}</h4>
				<p className='card-text'>{product.description}</p>
				<h5 className='card-text'>$ {product.price}</h5>
			</div>
		</div>
	)
}

export default Product
