import { todoReducer } from './todo/todoReducer'
import { usersReduser } from './users/slice'
import { productsReducer } from './products/slice'
import { authReducer } from './auth/slice'
import { rootReducer } from './root/slice'

export const reducer = {
	todo: todoReducer,
	users: usersReduser,
	products: productsReducer,
	auth: authReducer,
	root: rootReducer,
}
