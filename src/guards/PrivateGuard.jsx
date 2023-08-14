import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { isAuthSelect } from '../store/auth/selectors'

const PrivateGuard = ({ children }) => {
	const isAuth = useSelector(isAuthSelect)
	
	return isAuth ? children : <Navigate to='/' />
}

export default PrivateGuard
