import { createAction } from '@reduxjs/toolkit'

// export const createUser = (value) => ({ type: CREATE_NEW_NAME, payload: value })

// export const updateUser = (value) => ({ type: UPDATE_AGE, payload: value })

export const createUser = createAction('CREATE_NEW_NAME ')
export const updateUser = createAction('UPDATE_AGE')
