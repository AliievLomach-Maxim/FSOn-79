import { Field, Form, Formik } from 'formik'

const EditProfileForm = ({ update, profile }) => {
	return (
		<div
			className='container d-flex justify-content-center mt-5 card p-5'
			style={{ width: '24rem' }}
		>
			<Formik
				initialValues={{
					firstName: profile.firstName || '',
					lastName: profile.lasName || '',
					gender: profile.gender || '',
					phone: profile.phone || '',
				}}
				onSubmit={(values) => {
					update(values)
				}}
			>
				{() => (
					<Form>
						<div className='mb-3'>
							<label
								htmlFor='exampleInputFirstName'
								className='form-label'
							>
								First Name:
							</label>
							<Field
								name='firstName'
								className='form-control'
								id='exampleInputFirstName'
							/>
						</div>
						<div className='mb-3'>
							<label
								htmlFor='exampleInputGender'
								className='form-label'
							>
								Gender:
							</label>
							<Field
								name='gender'
								className='form-control'
								id='exampleInputGender'
							/>
						</div>
						<div className='mb-3'>
							<label
								htmlFor='exampleInputlastPhone'
								className='form-label'
							>
								Phone:
							</label>
							<Field
								name='phone'
								className='form-control'
								id='exampleInputlastPhone'
							/>
						</div>
						<div className='mb-3'>
							<label
								htmlFor='exampleInputlastName'
								className='form-label'
							>
								Last Name:
							</label>
							<Field
								name='lastName'
								className='form-control'
								id='exampleInputlastName'
							/>
						</div>
						<button type='submit' className='btn btn-primary'>
							Update
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default EditProfileForm
