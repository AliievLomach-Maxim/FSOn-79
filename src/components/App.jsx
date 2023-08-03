import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateGuard from '../guards/PrivateGuard'
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
				</Route>
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
