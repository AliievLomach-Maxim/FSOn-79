import React, { useContext, useState } from 'react'

const Context = React.createContext()

export const useAlert = () => useContext(Context)

const AlertContext = ({ children }) => {
	const [showAlert, setShowAlert] = useState(false)

	return (
		<Context.Provider
			value={{
				alert: showAlert,
				func: () => setShowAlert((prev) => !prev),
			}}
		>
			{children}
		</Context.Provider>
	)
}

export default AlertContext
