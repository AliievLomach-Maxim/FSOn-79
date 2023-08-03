import React, { useEffect } from 'react'
import Counter from '../components/Counter/Counter'
import { useSelector, useDispatch } from 'react-redux'
import { createUser, updateUser } from '../store/user/actions'
import Step from '../components/Counter/Step'

const HomePage = () => {
	const { name, age } = useSelector((state) => state.user)
	console.log('name,age :>> ', name, age)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(createUser('Bob'))
		dispatch(updateUser(42))
		// dispatch({ type: 'createNewName', payload: 'Bob' })
	}, [dispatch])

	return (
		<>
			<Step />
			<Counter />
		</>
	)
}

export default HomePage

// function useselector(clb) {
// 	//some...
// 	const state = store.getState()
// 	return clb(state)
// }

// const result = useselector((state)=>{return state})
