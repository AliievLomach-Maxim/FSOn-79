import { Link } from 'react-router-dom'

const User = ({ user: { _id, image, firstName, email, phone } }) => {
	return (
		<div className='card' style={{ width: '18rem' }}>
			<img src={image} className='card-img-top' alt='Avatar' />
			<div className='card-body'>
				<h5 className='card-title'>Name: {firstName}</h5>
				<p className='card-text'>Phone: {phone}</p>
				<p className='card-text'>Email: {email}</p>
				<Link to={`details/${_id}`}>Details</Link>
				{/* <button
					className='btn btn-danger'
				>
					Delete
				</button> */}
			</div>
		</div>
	)
}

export default User
