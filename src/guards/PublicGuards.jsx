import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { isAuthSelect } from '../store/auth/selectors'

const PublicGuards = ({ children }) => {
	const isAuth = useSelector(isAuthSelect)
	const location = useLocation()

	return !isAuth ? children : <Navigate to={location.state ?? '/'} />
}

export default PublicGuards
