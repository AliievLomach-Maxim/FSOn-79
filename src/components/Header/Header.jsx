import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { getAllUsersThunk } from '../../store/users/slice'

const Header = ({ handleShowModal }) => {
	const dispatch = useDispatch()
	const handleAction = () => {
		dispatch(getAllUsersThunk())
	}
	return (
		<nav className='navbar bg-dark mb-3 navbar-expand-md'>
			<div className='container-fluid'>
				<span className='navbar-brand mb-0 h1 text-success'>
					Navbar
				</span>
				<div
					className='collapse navbar-collapse'
					id='navbarNavAltMarkup'
				>
					<div className='navbar-nav'>
						<NavLink
							className='nav-link text-white'
							aria-current='page'
							to='/'
						>
							Home
						</NavLink>
						<NavLink className='nav-link text-white' to='/users'>
							Users
						</NavLink>
						<NavLink className='nav-link text-white' to='/products'>
							Products
						</NavLink>
					</div>
				</div>
				<button
					className='btn btn-outline-success'
					onClick={handleShowModal}
				>
					Open Modal
				</button>
				<button
					className='btn btn-outline-success'
					onClick={handleAction}
				>
					Thunk
				</button>
			</div>
		</nav>
	)
}

export default Header
