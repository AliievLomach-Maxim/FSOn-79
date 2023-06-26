const Header = ({ handleShowModal, handleShowModal2 }) => {
	return (
		<nav className='navbar bg-dark mb-3'>
			<div className='container-fluid'>
				<span className='navbar-brand mb-0 h1 text-success'>
					Navbar
				</span>
				<button
					className='btn btn-outline-success'
					onClick={handleShowModal}
				>
					Open Modal
				</button>
				<button
					className='btn btn-outline-danger'
					onClick={handleShowModal2}
				>
					Open Modal2
				</button>
			</div>
		</nav>
	)
}

export default Header
