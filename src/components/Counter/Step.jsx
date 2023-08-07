import { useDispatch, useSelector } from 'react-redux'
// import { setStepAction } from '../../store/counter/actions'
import { useState } from 'react'
import { selectorUser } from '../../store/userToolkit/selectors'

const Step = () => {
	const [value, setValue] = useState(false)
	// const user = useSelector(selectorUser)
	// const user = useSelector(() => {})
	const dispatch = useDispatch()
	const handleSubmit = (e) => {
		e.preventDefault()
		const { value } = e.target.elements.step
		// dispatch(setStepAction(value))
	}

	return (
		<>
			<button onClick={() => setValue((prev) => !prev)}>CLICK</button>
			<form
				onSubmit={handleSubmit}
				className='d-flex mt-2 mx-auto w-25'
				role='search'
			>
				<input
					className='form-control me-2 '
					type='number'
					name='step'
					placeholder='step'
				/>
				<button className='btn btn-outline-success' type='submit'>
					Set Step
				</button>
			</form>
		</>
	)
}

export default Step
