import { useParams } from 'react-router-dom'
import { getUserDetails } from '../api/users'
import { useEffect, useState } from 'react'
import User from '../components/Users/User/User'

const UserDetailsPage = () => {
	const [user, setUser] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const { id } = useParams()

	useEffect(() => {
		const userDetails = async () => {
			try {
				setIsLoading(true)
				const data = await getUserDetails(id)
				setUser(data)
				setIsLoading(false)
			} catch (error) {
				console.log(error.message)
				setIsLoading(false)
			}
		}
		userDetails()
	}, [id])

	return (
		<>
			{isLoading && <h2>Loading...</h2>}
			{user && <User user={user} />}
		</>
	)
}

export default UserDetailsPage
