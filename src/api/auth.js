import { instanceForUsers, setToken } from './api'

const setTokenToLocal = (token) => {
	localStorage.setItem('token', JSON.stringify(token))
}

export const singUp = async (body) => {
	const { data } = await instanceForUsers.post('/auth/signUp', body)
	setToken(data.token)
	setTokenToLocal(data.token)
	return data
}

export const login = async (body) => {
	const { data } = await instanceForUsers.post('/auth/login', body)
	setToken(data.token)
	setTokenToLocal(data.token)
	return data
}

export const refresh = async () => {
	const token = localStorage.getItem('token')
	token && setToken(JSON.parse(token))
	const { data } = await instanceForUsers('/auth/refresh')
	setTokenToLocal(data.token)
	return data
}
