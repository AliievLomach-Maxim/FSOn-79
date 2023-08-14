import { instanceForUsers, setToken } from './api'

export const singUp = async (body) => {
	const { data } = await instanceForUsers.post('/auth/signUp', body)
	setToken(data.token)
	return data
}

export const login = async (body) => {
	const { data } = await instanceForUsers.post('/auth/login', body)
	setToken(data.token)
	return data
}

export const refresh = async () => {
	const { data } = await instanceForUsers('/auth/refresh')
	return data
}
