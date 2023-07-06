import { Component } from 'react'
// import Counter from './Counter/Counter'
import Header from './Header/Header'
import Modal from './Modal/Modal'
import FormSignUp from './Forms/FormSignUp/FormSignUp'
import { nanoid } from 'nanoid'
// import FormikSignUp from './Forms/FormSignUp/FormikSignUp'
// import UsersList from './Users/UsersList/UsersList'
import { Toaster } from 'react-hot-toast'
import Users from './Users/Users'

class App extends Component {
	state = {
		isShowModal: false,
	}

	openModal = () => {
		this.setState({ isShowModal: true })
	}

	closeModal = () => {
		this.setState({ isShowModal: false })
	}

	createUser = (data) => {
		const newUser = {
			id: nanoid(),
			isDev: true,
			...data,
		}
		console.log(newUser)
	}

	render() {
		return (
			<div className='container'>
				<Toaster />
				<Header
					handleShowModal={this.openModal}
					handleShowModal2={this.openModal2}
				/>
				{/* <Counter /> */}
				{this.state.isShowModal && (
					<Modal closeModal={this.closeModal}>
						{/* <FormikSignUp
							closeModal={this.closeModal}
							createUser={this.createUser}
						/> */}
						<FormSignUp
							closeModal={this.closeModal}
							createUser={this.createUser}
						/>
					</Modal>
				)}
				<Users />
			</div>
		)
	}
}
export default App
