import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import UsersProvider from './Context/UsersContext'
// import App from './testContext/App'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter basename='practices_react'>
		<UsersProvider>
			<App />
		</UsersProvider>
	</BrowserRouter>
)
