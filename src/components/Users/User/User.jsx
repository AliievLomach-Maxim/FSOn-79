// import { Component } from "react";

// class User extends Component {
//     state = {  }
//     render() {
//         return (<></>);
//     }
// }

// export default User;

const User = ({
	user: { _id, image, firstName, email, phone },
	deleteUser,
}) => {
	return (
		<div className='card' style={{ width: '18rem' }}>
			<img src={image} className='card-img-top' alt='Avatar' />
			<div className='card-body'>
				<h5 className='card-title'>Name: {firstName}</h5>
				<p className='card-text'>Phone: {phone}</p>
				<p className='card-text'>Email: {email}</p>
				<button
					className='btn btn-danger'
					onClick={() => deleteUser(_id)}
				>
					Delete
				</button>
			</div>
		</div>
	)
}

export default User
