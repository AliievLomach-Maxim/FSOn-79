import React from 'react'
import LoginForm from '../../components/Forms/LoginForm/LoginForm'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../../store/auth/thunks'

const Login = () => {
	const dispatch = useDispatch()

	const login = (body) => {
		dispatch(loginThunk(body))
	}
	return (
		<>
			<Link to='/products'>Home</Link>
			<LoginForm login={login} />
			<Link to='/signUp'>Sign Up</Link>
		</>
	)
}

export default Login
