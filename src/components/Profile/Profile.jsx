const Profile = ({ profile }) => {
	return (
		<div className='card' style={{ width: '18rem' }}>
			<img src={profile.image} className='card-img-top' alt='...' />
			<div className='card-body'>
				<h5 className='card-title'>
					Name: {profile.firstName} {profile.lastName}
				</h5>
				<h4 className='card-title'>Email: {profile.email}</h4>
				<h4 className='card-title'>
					Gender: {profile.gender || 'none'}
				</h4>
				<h4 className='card-title'>Phone: {profile.phone || 'none'}</h4>
			</div>
		</div>
	)
}

export default Profile
