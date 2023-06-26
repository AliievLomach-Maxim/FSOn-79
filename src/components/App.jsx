import { Component } from 'react'
// import Counter from './Counter/Counter'
import Header from './Header/Header'
import Modal from './Modal/Modal'
import ToDoList from './ToDoList/ToDoList'

class App extends Component {
	state = {
		isShowModal: false,
		isShowModal2: false,
	}

	openModal = () => {
		this.setState({ isShowModal: true })
	}

	closeModal = () => {
		this.setState({ isShowModal: false })
	}
	openModal2 = () => {
		this.setState({ isShowModal2: true })
	}

	closeModal2 = () => {
		this.setState({ isShowModal2: false })
	}

	render() {
		return (
			<div className='container'>
				<Header
					handleShowModal={this.openModal}
					handleShowModal2={this.openModal2}
				/>
				{/* <Counter /> */}
				{this.state.isShowModal && (
					<Modal closeModal={this.closeModal}>
						<h2>Modal</h2>
					</Modal>
				)}
				{this.state.isShowModal2 && (
					<Modal closeModal={this.closeModal2}>
						<h2>Modal2</h2>
					</Modal>
				)}
				<ToDoList />
			</div>
		)
	}
}
export default App
