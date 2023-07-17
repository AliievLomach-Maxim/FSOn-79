import React, { useContext, useState } from 'react'

const Context = React.createContext()

export const useUsersContext = () => useContext(Context)

const UsersProvider = ({ children }) => {
	const [users, setUsers] = useState(null)

	return (
		<Context.Provider
			value={{
				users,
				setUsers,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export default UsersProvider
