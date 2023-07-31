import { UPDATE_AGE, CREATE_NEW_NAME } from './types'

export const createUser = (value) => ({ type: CREATE_NEW_NAME, payload: value })

export const updateUser = (value) => ({ type: UPDATE_AGE, payload: value })
