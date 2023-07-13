// import { useContext } from 'react'
// import { AlertContext } from './App'

import { useAlert } from './Context/AlertContext'

const Main = () => {
	// const { func } = useContext(AlertContext)
	const { func } = useAlert()
	return (
		<div>
			<h1>Hello Context</h1>
			<button onClick={func} className='btn btn-success'>
				Open Alert
			</button>
		</div>
	)
}

export default Main
