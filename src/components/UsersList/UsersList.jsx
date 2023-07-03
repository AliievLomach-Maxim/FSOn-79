import { Component } from 'react'
import data from '../../users.json'
import User from '../User/User'
import CreateUserForm from '../CreateUserForm/CreateUserForm'
import { nanoid } from 'nanoid'
import { toast } from 'react-hot-toast'

class UsersList extends Component {
	state = {
		users: null,
	}
	shouldComponentUpdate(nextP, nextS) {
		if (this.state.users !== nextS.users) return false
		return true
	}

	componentDidMount() {
		const localData = localStorage.getItem('users')
		if (localData) this.setState({ users: JSON.parse(localData) })
		else this.setState({ users: data })
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.users !== this.state.users)
			localStorage.setItem('users', JSON.stringify(this.state.users))

		if (prevState.users && prevState.users.length < this.state.users.length)
			toast.success('Create user successfully!')

		if (prevState.users && prevState.users.length > this.state.users.length)
			toast.error('Delete user successfully!')
	}

	createUser = (user) => {
		const newUser = {
			...user,
			_id: nanoid(),
			image: 'https://robohash.org/hicveldicta.png',
		}
		this.setState((prev) => ({
			users: [newUser, ...prev.users],
		}))
	}

	deleteUser = (id) => {
		this.setState((prev) => ({
			users: prev.users.filter((user) => user._id !== id),
		}))
	}

	render() {
		return (
			<>
				<CreateUserForm createUser={this.createUser} />
				{this.state.users &&
					this.state.users.map((user) => (
						<User
							key={user._id}
							user={user}
							deleteUser={this.deleteUser}
						/>
					))}
			</>
		)
	}
}

export default UsersList
