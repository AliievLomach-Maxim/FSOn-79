import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import UsersProvider from './Context/UsersContext'
import { store } from './store/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<UsersProvider>
				<App />
			</UsersProvider>
		</Provider>
	</BrowserRouter>
)
