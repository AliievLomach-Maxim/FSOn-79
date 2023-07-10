const FilterUsersForm = ({ handleFilter }) => {
	const handleChange = ({ target: { value } }) => {
		handleFilter(value)
	}

	return (
		<input
			className='form-control me-2'
			type='search'
			placeholder='Search'
			aria-label='Search'
			onChange={handleChange}
		/>
	)
}
// const FilterUsersForm = ({ handleFilter }) => {
// 	const [filterQuery, setFilterQuery] = useState('')
// 	const handleChange = ({ target: { value } }) => {
// 		setFilterQuery(value)
// 	}

// 	useEffect(() => {
// 		handleFilter(filterQuery)
// 	}, [filterQuery, handleFilter])

// 	return (
// 		<form className='d-flex'>
// 			<input
// 				className='form-control me-2'
// 				type='search'
// 				placeholder='Search'
// 				aria-label='Search'
// 				value={filterQuery}
// 				onChange={handleChange}
// 			/>
// 			<button className='btn btn-outline-success' type='submit'>
// 				Search
// 			</button>
// 		</form>
// 	)
// }

export default FilterUsersForm
