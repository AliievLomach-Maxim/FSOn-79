import { createAsyncThunk } from '@reduxjs/toolkit'
import { login, singUp } from '../../api/auth'

export const signUpThunk = createAsyncThunk(
	'auth/signUp',
	async (body, { rejectWithValue }) => {
		try {
			return await singUp(body)
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)

export const loginThunk = createAsyncThunk(
	'auth/login',
	async (body, { rejectWithValue }) => {
		try {
			return await login(body)
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
