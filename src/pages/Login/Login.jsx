import React from 'react'
import LoginForm from '../../components/Forms/LoginForm/LoginForm'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../../store/auth/thunks'

const Login = () => {
	const dispatch = useDispatch()

	const login = async (body) => {
		try {
			await dispatch(loginThunk(body)).unwrap()
			console.log('Login successfully')
		} catch (error) {
			console.log(error)
		}
	}
	// const login = (body) => {
	// 	dispatch(loginThunk(body))
	// 		.unwrap()
	// 		.then(() => {
	// 			console.log('Login successfully')
	// 		})
	// 		.catch((error) => {
	// 			console.log(error)
	// 		})
	// }
	return (
		<>
			<Link to='/products'>Home</Link>
			<LoginForm login={login} />
			<Link to='/signUp'>Sign Up</Link>
		</>
	)
}

export default Login
