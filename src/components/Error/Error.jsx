import React from 'react'

const Error = ({ message }) => {
	return (
		<div className='alert alert-danger' role='alert'>
			{message}
		</div>
	)
}

export default Error
