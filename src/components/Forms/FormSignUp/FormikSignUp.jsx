import { Formik } from 'formik'
import React from 'react'

const FormikSignUp = ({ createUser, closeModal }) => {
	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
				check: false,
				select: 'male',
				radio: 'male',
			}}
			onSubmit={(values) => {
				const data = {
					...values,
				}
				delete data.check
				createUser(data)
				closeModal()
			}}
		>
			{(formik) => (
				<form onSubmit={formik.handleSubmit}>
					<div className='mb-3'>
						<label
							htmlFor='exampleInputEmail1'
							className='form-label'
						>
							Email address
						</label>
						<input
							type='email'
							name='email'
							className='form-control'
							id='exampleInputEmail1'
							aria-describedby='emailHelp'
							onChange={formik.handleChange}
							value={formik.values.email}
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
							type='password'
							name='password'
							className='form-control'
							id='exampleInputPassword1'
							onChange={formik.handleChange}
							value={formik.values.password}
						/>
					</div>
					<div className='mb-3 form-check'>
						<input
							name='check'
							type='checkbox'
							className='form-check-input'
							id='exampleCheck1'
							onChange={formik.handleChange}
							checked={formik.values.check}
						/>
						<label
							className='form-check-label'
							htmlFor='exampleCheck1'
						>
							Check me out
						</label>
					</div>
					<div className='mb-3 '>
						<select
							name='select'
							type='select'
							className='form-select'
							onChange={formik.handleChange}
							value={formik.values.select}
						>
							<option value='male'>male</option>
							<option value='female'>female</option>
							<option value='other'>other</option>
						</select>
					</div>
					{/*  */}
					<div className='form-check'>
						<input
							className='form-check-input'
							type='radio'
							name='radio'
							id='flexRadioDefault1'
							onChange={formik.handleChange}
							value='male'
						/>
						<label
							className='form-check-label'
							htmlFor='flexRadioDefault1'
						>
							male
						</label>
					</div>
					<div className='form-check'>
						<input
							className='form-check-input'
							type='radio'
							name='radio'
							id='flexRadioDefault2'
							onChange={formik.handleChange}
							value='female'
						/>
						<label
							className='form-check-label'
							htmlFor='flexRadioDefault2'
						>
							female
						</label>
					</div>
					<div className='form-check'>
						<input
							className='form-check-input'
							type='radio'
							name='radio'
							id='flexRadioDefault3'
							onChange={formik.handleChange}
							value='other'
						/>
						<label
							className='form-check-label'
							htmlFor='flexRadioDefault3'
						>
							other
						</label>
					</div>
					{/*  */}
					<button
						type='submit'
						className='btn btn-primary'
						disabled={
							!formik.values.check ||
							!formik.values.password ||
							!formik.values.email
						}
					>
						Submit
					</button>
				</form>
			)}
		</Formik>
	)
}

export default FormikSignUp
