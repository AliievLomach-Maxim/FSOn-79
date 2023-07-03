import { Component } from 'react'

class CreateUserForm extends Component {
	state = {
		firstName: '',
		email: '',
		password: '',
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.createUser(this.state)
		this.setState({
			firstName: '',
			email: '',
			password: '',
		})
	}

	handleChange = ({ target: { name, value } }) => {
		this.setState({
			[name]: value,
		})
	}

	render() {
		const { firstName, email, password } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='exampleInputName' className='form-label'>
						First Name
					</label>
					<input
						name='firstName'
						type='text'
						className='form-control'
						id='exampleInputName'
						onChange={this.handleChange}
						value={firstName}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='exampleInputEmail1' className='form-label'>
						Email address
					</label>
					<input
						name='email'
						type='email'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						onChange={this.handleChange}
						value={email}
					/>
					<div id='emailHelp' className='form-text'>
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className='mb-3'>
					<label
						htmlFor='exampleInputPassword1'
						className='form-label'
					>
						Password
					</label>
					<input
						name='password'
						type='password'
						className='form-control'
						id='exampleInputPassword1'
						onChange={this.handleChange}
						value={password}
					/>
				</div>
				<button type='submit' className='btn btn-primary'>
					Create user
				</button>
			</form>
		)
	}
}

export default CreateUserForm
