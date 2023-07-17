import axios from 'axios'

axios.defaults.baseURL = 'https://practices-api.vercel.app/'

export const getAllUsers = async () => {
	const { data } = await axios('users')
	return data
}

export const getUserDetails = async (id) => {
	const { data } = await axios(`users/${id}`)
	return data
}

export const getUsersBySearch = async (query) => {
	const { data } = await axios(`users?name=${query}`)
	return data
}
