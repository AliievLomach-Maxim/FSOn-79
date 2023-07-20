import React, { useCallback, useEffect, useRef, useState } from 'react'
import UsersList from './UsersList/UsersList'
import { getAllUsers, getUsersBySearch } from '../../api/users'
// import { useUsersContext } from '../../Context/UsersContext'
import SearchUsersForm from '../Forms/SearchUsersForm/SearchUsersForm'
import { useSearchParams } from 'react-router-dom'

const Users = () => {
	const [users, setUsers] = useState(null)
	// const { users, setUsers } = useUsersContext()

	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	const [searchParams, setSearchParams] = useSearchParams()

	const searchValue = searchParams.get('search')

	const firstRender = useRef(true)

	const handleSearch = async (query) => {
		try {
			setIsLoading(true)
			const data = await getUsersBySearch(query)
			setUsers(data.users)
		} catch (error) {
			setError(error.message)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(
		function getUsersBySearchFirstRender() {
			firstRender.current && searchValue && handleSearch(searchValue)
		},
		[searchValue]
	)

	useEffect(() => {
		!searchValue && setSearchParams({})
	}, [searchValue, setSearchParams])

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
		!users && !searchValue && getUsers()
	}, [getUsers, searchValue, users])

	// const sortedUsers = useMemo(() => {
	// 	return users?.toSorted((a, b) => {
	// 		console.log('Sorting')
	// 		return a.firstName.localeCompare(b.firstName)
	// 	})
	// }, [users])

	return (
		<>
			<SearchUsersForm
				firstRender={firstRender}
				setSearchParams={setSearchParams}
				searchValue={searchValue}
				handleSearch={handleSearch}
			/>
			{isLoading && <h2>Loading...</h2>}
			{error && <h2>{error}</h2>}
			<UsersList users={users} />
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
