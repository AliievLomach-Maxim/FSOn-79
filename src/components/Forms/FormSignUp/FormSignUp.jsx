import React, { useState } from 'react'

const FormSignUp = ({ createUser, closeModal }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [check, setCheck] = useState(false)
	const [select, setSelect] = useState('male')
	const [radio, setRadio] = useState('male')

	const handleChange = ({ target: { name, value, checked } }) => {
		if (name === 'email') setEmail(value)
		if (name === 'password') setPassword(value)
		if (name === 'check') setCheck(checked)
	}

	const handleRadio = (value) => {
		setRadio(value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const data = {
			email,
			password,
			select,
			radio,
		}

		createUser(data)
		closeModal()
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className='mb-3'>
				<label htmlFor='exampleInputEmail1' className='form-label'>
					Email address
				</label>
				<input
					type='email'
					name='email'
					className='form-control'
					id='exampleInputEmail1'
					aria-describedby='emailHelp'
					onChange={handleChange}
					value={email}
				/>
				<div id='emailHelp' className='form-text'>
					We'll never share your email with anyone else.
				</div>
			</div>
			<div className='mb-3'>
				<label htmlFor='exampleInputPassword1' className='form-label'>
					Password
				</label>
				<input
					type='password'
					name='password'
					className='form-control'
					id='exampleInputPassword1'
					onChange={handleChange}
					value={password}
				/>
			</div>
			<div className='mb-3 form-check'>
				<input
					name='check'
					type='checkbox'
					className='form-check-input'
					id='exampleCheck1'
					onChange={handleChange}
					checked={check}
				/>
				<label className='form-check-label' htmlFor='exampleCheck1'>
					Check me out
				</label>
			</div>
			<div className='mb-3 '>
				<select
					name='select'
					type='select'
					className='form-select'
					onChange={handleChange}
					value={select}
				>
					<option value='male'>male</option>
					<option value='female'>female</option>
					<option value='other'>other</option>
				</select>
			</div>

			<div className='form-check'>
				<input
					className='form-check-input'
					type='radio'
					name='radio'
					id='flexRadioDefault1'
					onChange={() => handleRadio('male')}
					checked={radio === 'male'}
				/>
				<label className='form-check-label' for='flexRadioDefault1'>
					male
				</label>
			</div>
			<div className='form-check'>
				<input
					className='form-check-input'
					type='radio'
					name='radio'
					id='flexRadioDefault2'
					onChange={() => handleRadio('female')}
					checked={radio === 'female'}
				/>
				<label className='form-check-label' for='flexRadioDefault2'>
					female
				</label>
			</div>
			<div className='form-check'>
				<input
					className='form-check-input'
					type='radio'
					name='radio'
					id='flexRadioDefault3'
					onChange={() => handleRadio('other')}
					checked={radio === 'other'}
				/>
				<label className='form-check-label' for='flexRadioDefault3'>
					other
				</label>
			</div>
			<button
				className='btn btn-primary'
				disabled={!check || !password || !email}
			>
				Submit
			</button>
		</form>
	)
}

export default FormSignUp

// class FormSignUp extends Component {
// 	state = {
// 		email: '',
// 		password: '',
// 		check: false,
// 		select: 'male',
// 		radio: 'male',
// 	}

// 	handleChange = ({ target: { name, value, checked, type } }) => {
// 		this.setState({
// 			[name]: type === 'checkbox' ? checked : value,
// 		})
// 	}
// 	handleRadio = (value) => {
// 		this.setState({
// 			radio: value,
// 		})
// 	}

// 	handleSubmit = (e) => {
// 		e.preventDefault()
// 		const data = {
// 			...this.state,
// 		}
// 		delete data.check

// 		this.props.createUser(data)
// 		this.props.closeModal()
// 		// this.setState({
// 		// 	email: '',
// 		// 	password: '',
// 		// 	check: false,
// 		// 	select: 'male',
// 		// 	radio: 'male',
// 		// })
// 	}
// 	render() {
// 		const { email, password, check, select, radio } = this.state
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<div className='mb-3'>
// 					<label htmlFor='exampleInputEmail1' className='form-label'>
// 						Email address
// 					</label>
// 					<input
// 						type='email'
// 						name='email'
// 						className='form-control'
// 						id='exampleInputEmail1'
// 						aria-describedby='emailHelp'
// 						onChange={this.handleChange}
// 						value={email}
// 					/>
// 					<div id='emailHelp' className='form-text'>
// 						We'll never share your email with anyone else.
// 					</div>
// 				</div>
// 				<div className='mb-3'>
// 					<label
// 						htmlFor='exampleInputPassword1'
// 						className='form-label'
// 					>
// 						Password
// 					</label>
// 					<input
// 						type='password'
// 						name='password'
// 						className='form-control'
// 						id='exampleInputPassword1'
// 						onChange={this.handleChange}
// 						value={password}
// 					/>
// 				</div>
// 				<div className='mb-3 form-check'>
// 					<input
// 						name='check'
// 						type='checkbox'
// 						className='form-check-input'
// 						id='exampleCheck1'
// 						onChange={this.handleChange}
// 						// onChange={this.handleCheck}
// 						checked={check}
// 					/>
// 					<label className='form-check-label' htmlFor='exampleCheck1'>
// 						Check me out
// 					</label>
// 				</div>
// 				<div className='mb-3 '>
// 					<select
// 						name='select'
// 						type='select'
// 						className='form-select'
// 						onChange={this.handleChange}
// 						value={select}
// 					>
// 						<option value='male'>male</option>
// 						<option value='female'>female</option>
// 						<option value='other'>other</option>
// 					</select>
// 				</div>
// 				{/*  */}
// 				<div className='form-check'>
// 					<input
// 						className='form-check-input'
// 						type='radio'
// 						name='radio'
// 						id='flexRadioDefault1'
// 						onChange={() => this.handleRadio('male')}
// 						checked={radio === 'male'}
// 					/>
// 					<label className='form-check-label' for='flexRadioDefault1'>
// 						male
// 					</label>
// 				</div>
// 				<div className='form-check'>
// 					<input
// 						className='form-check-input'
// 						type='radio'
// 						name='radio'
// 						id='flexRadioDefault2'
// 						onChange={() => this.handleRadio('female')}
// 						checked={radio === 'female'}
// 					/>
// 					<label className='form-check-label' for='flexRadioDefault2'>
// 						female
// 					</label>
// 				</div>
// 				<div className='form-check'>
// 					<input
// 						className='form-check-input'
// 						type='radio'
// 						name='radio'
// 						id='flexRadioDefault3'
// 						onChange={() => this.handleRadio('other')}
// 						checked={radio === 'other'}
// 					/>
// 					<label className='form-check-label' for='flexRadioDefault3'>
// 						other
// 					</label>
// 				</div>
// 				{/*  */}
// 				<button
// 					className='btn btn-primary'
// 					disabled={!check || !password || !email}
// 				>
// 					Submit
// 				</button>
// 			</form>
// 		)
// 	}
// }

// export default FormSignUp
