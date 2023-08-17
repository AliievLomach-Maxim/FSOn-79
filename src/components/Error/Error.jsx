import React from 'react'
import { useSelector } from 'react-redux'
import { errorSelect } from '../../store/root/selectors'

const Error = () => {
	const error = useSelector(errorSelect)

	return (
		error && (
			<div className='alert alert-danger' role='alert'>
				{error}
			</div>
		)
	)
}

export default Error
