// import { useContext } from 'react'
// import { AlertContext } from './App'

import { useAlert } from './Context/AlertContext'

const Alert = () => {
	// const { alert } = useContext(AlertContext)
	const { alert } = useAlert()

	return alert && <div className='alert alert-danger'>Messaaaaaggee</div>
}

export default Alert
