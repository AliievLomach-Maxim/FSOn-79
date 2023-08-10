import { todoReducer } from './todo/todoReducer'
import { usersReduser } from './users/slice'
import { productsReducer } from './products/slice'

export const reducer = {
	todo: todoReducer,
	users: usersReduser,
	products: productsReducer,
}
