import axios from 'axios'

export const instanceForUsers = axios.create({
	baseURL: 'https://practices-api.vercel.app/',
})

export const instanceForProducts = axios.create({
	baseURL: 'https://dummyjson.com/products',
})
