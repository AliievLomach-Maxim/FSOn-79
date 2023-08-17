import React, { Suspense, useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Modal from '../components/Modal/Modal'
import FormSignUp from '../components/Forms/FormSignUp/FormSignUp'
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux'
import { isAuthSelect } from '../store/auth/selectors'
import { refreshThunk } from '../store/auth/thunks'

const Layout = () => {
	const isAuth = useSelector(isAuthSelect)
	const dispatch = useDispatch()
	const [isShowModal, setIsShowModal] = useState(false)

	useEffect(() => {
		const refresh = () => {
			!isAuth && dispatch(refreshThunk())
		}
		refresh()
	}, [dispatch, isAuth])

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
			<Suspense fallback={<h2>Loading..</h2>}>
				<Outlet />
			</Suspense>
		</div>
	)
}

export default Layout
