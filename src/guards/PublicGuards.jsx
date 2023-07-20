import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicGuards = ({ children }) => {
	const isAuth = false
	return !isAuth ? children : <Navigate to='/' />
}

export default PublicGuards
