import axios from 'axios'

export const instanceForUsers = axios.create({
	baseURL: 'https://practices-api.vercel.app',
})

export const instanceForProducts = axios.create({
	baseURL: 'https://dummyjson.com/products',
})

export const setToken = (token) => {
	instanceForUsers.defaults.headers.common[
		'Authorization'
	] = `Bearer ${token}`
}

export const dellToken = (token) => {
	delete instanceForUsers.defaults.headers.common['Authorization']
}
