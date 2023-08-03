// import { combineReducers } from 'redux'
import { todoReducer } from './todo/todoReducer'
import { userReducer } from './user/userReducer'
import { userReducer as userReducer2 } from './userToolkit/userReducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['age'],
}
const persistConfig2 = {
	key: 'root2',
	storage,
	blacklist: ['name'],
}

const persistedReducerUser = persistReducer(persistConfig, userReducer)
const persistedReducerUser2 = persistReducer(persistConfig2, userReducer2)

export const reducer = {
	user: persistedReducerUser,
	userToolkit: persistedReducerUser2,
	todo: todoReducer,
}
