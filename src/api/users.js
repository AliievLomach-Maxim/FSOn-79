import { instanceForUsers } from './api'

export const getAllUsers = async () => {
	const { data } = await instanceForUsers('auth/refresh', {
		headers: { Authorization: 'Bearer qrwetynbasvd' },
	})
	return data
}

export const getUserDetails = async (id) => {
	const { data } = await instanceForUsers(`users/${id}`)
	return data
}

export const getUsersBySearch = async (query) => {
	const { data } = await instanceForUsers(`users?name=${query}`)
	return data
}
