import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import UsersPage from '../pages/UsersPage'
import Layout from '../Layout/Layout'
import ErrorPage from '../pages/ErrorPage'
import UserDetailsPage from '../pages/UserDetailsPage'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='users' element={<UsersPage />} />
				<Route path='users/details/:id' element={<UserDetailsPage />} />
			</Route>
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	)
}

export default App
