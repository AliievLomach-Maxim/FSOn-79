import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import UsersList from './UsersList/UsersList'
import { getAllUsers } from '../../api/users'
import Modal from '../Modal/Modal'
import { useUsersContext } from '../../Context/UsersContext'

const Users = () => {
	// const [users, setUsers] = useState(null)
	const { users, setUsers } = useUsersContext()

	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [showModal, setShowModal] = useState(false)

	const getUsers = useCallback(async () => {
		setIsLoading(true)
		setError('')

		try {
			const data = await getAllUsers()
			setUsers(data.users)
			setIsLoading(false)
		} catch (error) {
			setError(error.message)
			setIsLoading(false)
		}
	}, [setUsers])

	useEffect(() => {
		!users && getUsers()
	}, [getUsers, users])

	const sortedUsers = useMemo(() => {
		return users?.toSorted((a, b) => {
			console.log('Sorting')
			return a.firstName.localeCompare(b.firstName)
		})
	}, [users])

	const inputRef = useRef()

	const handleFocus = () => {
		inputRef.current.focus()
	}
	return (
		<>
			<button onClick={() => setShowModal(true)}>show</button>
			<button onClick={handleFocus}>FOCUS</button>
			<input type='text' ref={inputRef} />
			{showModal && (
				<Modal closeModal={() => setShowModal(false)}>MOdal</Modal>
			)}
			{isLoading && <h2>Loading...</h2>}
			{error && <h2>{error}</h2>}
			<button className='btn btn-secondary' onClick={getUsers}>
				show users
			</button>
			<UsersList users={sortedUsers} />
		</>
	)
}

// const Users = () => {
// 	const [users, setUsers] = useState(null)
// 	const [isLoading, setIsLoading] = useState(false)
// 	const [error, setError] = useState('')

// 	useEffect(() => {
// 		// setIsLoading(true)
// 		// getAllUsers()
// 		// 	.then((data) => {
// 		// 		setUsers(data.users)
// 		// 	})
// 		// 	.catch((err) => {
// 		// 		setError(error.message)
// 		// 		console.log('err :>> ', err)
// 		// 	})
// 		// 	.finally(() => {
// 		// 		setIsLoading(false)
// 		// 	})
// 		getUsers()
// 	}, [])

// 	const getUsers = async () => {
// 		setIsLoading(true)
// 		setError('')

// 		try {
// 			const data = await getAllUsers()
// 			setUsers(data.users)
// 			setIsLoading(false)
// 		} catch (error) {
// 			setError(error.message)
// 			setIsLoading(false)
// 		}
// 	}

// 	return (
// 		<>
// 			{isLoading && <h2>Loading...</h2>}
// 			{error && <h2>{error}</h2>}
// 			<button className='btn btn-secondary' onClick={getUsers}>
// 				show users
// 			</button>
// 			<UsersList users={users} />
// 		</>
// 	)
// }

export default Users
