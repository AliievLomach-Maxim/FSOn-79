import { instanceForUsers } from './api'

export const updateProfile = async (body, id) => {
	const { data } = await instanceForUsers.put(`/users/${id}`, body)
	return data
}
