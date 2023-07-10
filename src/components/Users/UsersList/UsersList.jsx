import React from 'react'
import User from '../User/User'

const UsersList = ({ users, deleteUser, filteredUsers }) => {
	return (
		users &&
		(filteredUsers ?? users).map((user) => (
			<User key={user._id} user={user} deleteUser={deleteUser} />
		))
	)
}
// const UsersList = ({ users, status, error, STATUS }) => {
// 	if (status === STATUS.PENDING) return <h2>Loading...</h2>
// 	if (status === STATUS.FULFILLED)
// 		return users.map((user) => <User key={user._id} user={user} />)
// 	if (status === STATUS.REJECTED) return <h2>{error}</h2>
// }

export default UsersList
