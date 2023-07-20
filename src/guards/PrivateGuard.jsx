import { Navigate } from 'react-router-dom'

const PrivateGuard = ({ children }) => {
	const isAuth = false
	return isAuth ? children : <Navigate to='/' />
}

export default PrivateGuard
