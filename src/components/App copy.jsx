import { nanoid } from 'nanoid'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Header from './Header/Header'
import Modal from './Modal/Modal'
import FormSignUp from './Forms/FormSignUp/FormSignUp'
import Users from './Users/Users'
// import TestUseMemo from './TestUseMemo/TestUseMemo'

const App = () => {
	const [isShowModal, setIsShowModal] = useState(false)

	const openModal = () => {
		setIsShowModal(true)
	}

	const closeModal = () => {
		setIsShowModal(false)
	}

	const createUser = (data) => {
		const newUser = {
			id: nanoid(),
			isDev: true,
			...data,
		}
		console.log(newUser)
	}

	return (
		<div className='container'>
			<Toaster />
			<Header handleShowModal={openModal} />
			{isShowModal && (
				<Modal closeModal={closeModal}>
					<FormSignUp
						closeModal={closeModal}
						createUser={createUser}
					/>
				</Modal>
			)}
			<Users />
			{/* <TestUseMemo /> */}
		</div>
	)
}

export default App
