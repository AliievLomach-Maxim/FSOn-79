// const Modal = ({ children, closeModal }) => {
// 	return (
// 		<div
// 			className='modal fade show'
// 			style={{ display: 'block', backdropFilter: 'blur(5px)' }}
// 			// onClick={closeModal}
// 		>
// 			<div className='modal-dialog'>
// 				<div className='modal-content'>
// 					<div className='modal-header'>
// 						<h5 className='modal-title'> Modal</h5>
// 						<button
// 							type='button'
// 							className='btn-close'
// 							aria-label='Close'
// 							onClick={closeModal}
// 						></button>
// 					</div>
// 					<div className='modal-body'>{children}</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

import { Component } from 'react'

// export default Modal

class Modal extends Component {
	// handleEsc = ({ target: { code } }) => {
	handleEsc = ({ code }) => {
		if (code === 'Escape') this.props.closeModal()
	}
	componentDidMount() {
		document.addEventListener('keydown', this.handleEsc)
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleEsc)
	}

	render() {
		const { children, closeModal } = this.props
		return (
			<div
				className='modal fade show'
				style={{ display: 'block', backdropFilter: 'blur(5px)' }}
				// onClick={closeModal}
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title'> Modal</h5>
							<button
								type='button'
								className='btn-close'
								aria-label='Close'
								onClick={closeModal}
							></button>
						</div>
						<div className='modal-body'>{children}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Modal
