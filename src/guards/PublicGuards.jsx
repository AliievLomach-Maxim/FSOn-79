import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { isAuthSelect } from '../store/auth/selectors'

const PublicGuards = ({ children }) => {
	const isAuth = useSelector(isAuthSelect)

	return !isAuth ? children : <Navigate to='/' />
}

export default PublicGuards
