import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { isAuthSelect } from '../store/auth/selectors'

const PrivateGuard = ({ children }) => {
	const isAuth = useSelector(isAuthSelect)
	const location = useLocation()

	return isAuth ? children : <Navigate to='/login' state={location} />
}

export default PrivateGuard
