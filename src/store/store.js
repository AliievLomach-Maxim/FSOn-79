import { createStore } from 'redux'
import { userReducer } from './user/userReducer'
import { reducer } from './reducer'

export const store = createStore(reducer)

// console.log('state :>> ', store.getState())

// store.dispatch({ type: 'createNewName', payload: 'Bob' })
// store.dispatch({ type: 'updateAge', payload: 40 })

// console.log('state :>> ', store.getState())
