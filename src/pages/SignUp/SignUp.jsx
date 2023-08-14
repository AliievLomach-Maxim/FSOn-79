import { useDispatch } from 'react-redux'
import SignUpForm from '../../components/Forms/SignUpForm/SignUpForm'
import { signUpThunk } from '../../store/auth/thunks'
import { Link } from 'react-router-dom'

const SignUp = () => {
	const dispatch = useDispatch()

	const sign = (body) => {
		dispatch(signUpThunk(body))
	}

	return (
		<>
			<Link to='/products'>Home</Link>
			<SignUpForm signUp={sign} />
			<Link to='/login'>Login</Link>
		</>
	)
}

export default SignUp
