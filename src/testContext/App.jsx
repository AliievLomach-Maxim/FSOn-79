import Alert from './Alert'
import Main from './Main'
import AlertContext from './Context/AlertContext'

const App = () => {
	return (
		<AlertContext>
			<div className='container pt-2'>
				<Alert />
				<Main />
			</div>
		</AlertContext>
	)
}

export default App
