import React from 'react'

const SearchUsersForm = ({
	handleSearch,
	setSearchParams,
	searchValue,
	firstRender,
}) => {
	const handleChange = ({ target: { value } }) => {
		setSearchParams({ search: value })
		firstRender.current = false
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		handleSearch(searchValue)
	}
	return (
		<form className='d-flex' role='search' onSubmit={handleSubmit}>
			<input
				className='form-control me-2'
				type='search'
				placeholder='Search'
				aria-label='Search'
				onChange={handleChange}
				value={searchValue}
			/>
			<button className='btn btn-outline-success' type='submit'>
				Search
			</button>
		</form>
	)
}

export default SearchUsersForm
