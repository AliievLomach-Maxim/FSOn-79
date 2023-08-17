import { useSelector } from 'react-redux'
import { loadingSelect } from '../../store/root/selectors'

const Loader = () => {
	const isLoading = useSelector(loadingSelect)
	return (
		isLoading && (
			<div className='spinner-border text-success' role='status'>
				<span className='visually-hidden'>Loading...</span>
			</div>
		)
	)
}

export default Loader
