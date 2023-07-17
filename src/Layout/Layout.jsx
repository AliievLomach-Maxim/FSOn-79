import React, { useState } from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Modal from '../components/Modal/Modal'
import FormSignUp from '../components/Forms/FormSignUp/FormSignUp'
import { nanoid } from 'nanoid'

const Layout = () => {
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
			<Outlet />
		</div>
	)
}

export default Layout
