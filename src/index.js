import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import UsersProvider from './Context/UsersContext'
// import App from './testContext/App'
import { persistor, store } from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<UsersProvider>
					<App />
				</UsersProvider>
			</PersistGate>
		</Provider>
	</BrowserRouter>
)
