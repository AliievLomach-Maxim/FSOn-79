import { Navigate } from 'react-router-dom'

const PrivateGuard = ({ children }) => {
	const isAuth = true
	return isAuth ? children : <Navigate to='/' />
}

export default PrivateGuard
