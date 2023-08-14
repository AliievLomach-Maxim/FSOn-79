import { Field, Form, Formik } from 'formik'

const SignUpForm = ({ signUp }) => {
	return (
		<div className='container d-flex justify-content-center mt-5'>
			<Formik
				initialValues={{
					email: '',
					password: '',
					firstName: '',
				}}
				onSubmit={(values) => {
					signUp(values)
				}}
			>
				{() => (
					<Form>
						<div className='mb-3'>
							<label
								htmlFor='exampleInputName'
								className='form-label'
							>
								Name
							</label>
							<Field
								name='firstName'
								className='form-control'
								id='exampleInputName'
							/>
						</div>
						<div className='mb-3'>
							<label
								htmlFor='exampleInputEmail'
								className='form-label'
							>
								Email
							</label>
							<Field
								name='email'
								className='form-control'
								id='exampleInputEmail'
							/>
						</div>
						<div className='mb-3'>
							<label
								htmlFor='exampleInputPassword'
								className='form-label'
							>
								Password
							</label>
							<Field
								name='password'
								className='form-control'
								id='exampleInputPassword'
							/>
						</div>
						<button type='submit' className='btn btn-primary'>
							Login
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default SignUpForm
