import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateGuard from '../guards/PrivateGuard'
import ProductsPage from '../pages/ProductsPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import PublicGuards from '../guards/PublicGuards'
import Loader from './Loader/Loader'
import Error from './Error/Error'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
// import HomePage from '../pages/HomePage'
// import UsersPage from '../pages/UsersPage'
// import Layout from '../Layout/Layout'
// import ErrorPage from '../pages/ErrorPage'
// import UserDetailsPage from '../pages/UserDetailsPage'

const HomePage = lazy(() => import('../pages/HomePage'))
const UsersPage = lazy(() => import('../pages/UsersPage'))
const Layout = lazy(() => import('../Layout/Layout'))
const ErrorPage = lazy(() => import('../pages/ErrorPage'))
const UserDetailsPage = lazy(() => import('../pages/UserDetailsPage'))

const App = () => {
	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<Loader />
			<Error />
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route
						path='users'
						element={
							<PrivateGuard>
								<UsersPage />
							</PrivateGuard>
						}
					/>
					<Route
						path='users/details/:id'
						element={<UserDetailsPage />}
					/>
					<Route path='products' element={<ProductsPage />} />
					<Route
						path='profile'
						element={
							<PrivateGuard>
								<ProfilePage />
							</PrivateGuard>
						}
					/>
				</Route>
				<Route
					path='/login'
					element={
						<PublicGuards>
							<Login />
						</PublicGuards>
					}
				/>
				<Route
					path='/signUp'
					element={
						<PublicGuards>
							<SignUp />
						</PublicGuards>
					}
				/>

				<Route
					path='*'
					element={
						<Suspense fallback={<h1>Loading...</h1>}>
							<ErrorPage />
						</Suspense>
					}
				/>
			</Routes>
		</Suspense>
	)
}

export default App
