import { Link, useLocation } from 'react-router-dom'

const User = ({ user: { _id, image, firstName, email, phone } }) => {
	const location = useLocation()
	return (
		<div className='card' style={{ width: '18rem' }}>
			<img src={image} className='card-img-top' alt='Avatar' />
			<div className='card-body'>
				<h5 className='card-title'>Name: {firstName}</h5>
				<p className='card-text'>Phone: {phone}</p>
				<p className='card-text'>Email: {email}</p>
				{!location.pathname.includes('details') && (
					<Link to={`details/${_id}`} state={location}>
						Details
					</Link>
				)}
			</div>
		</div>
	)
}

export default User
