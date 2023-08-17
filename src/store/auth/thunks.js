import { createAsyncThunk } from '@reduxjs/toolkit'
import { login, refresh, singUp } from '../../api/auth'
import { updateProfile } from '../../api/profile'

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

export const refreshThunk = createAsyncThunk(
	'auth/refresh',
	async (_, { rejectWithValue }) => {
		try {
			return await refresh()
		} catch (error) {
			console.log(error)
			return rejectWithValue('')
		}
	}
)

export const updateProfileThunk = createAsyncThunk(
	'auth/update/profile',
	async ({ body, id }, { rejectWithValue }) => {
		try {
			return await updateProfile(body, id)
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
