import React from 'react'
import User from '../User/User'

const UsersList = ({ users }) => {
	return users && users.map((user) => <User key={user._id} user={user} />)
}

export default UsersList
