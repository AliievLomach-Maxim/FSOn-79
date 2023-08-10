import { Field, Form, Formik } from 'formik'
import React from 'react'

const CreateProductForm = ({ createProduct }) => {
	return (
		<Formik
			initialValues={{
				title: '',
				description: '',
			}}
			onSubmit={(values) => {
				createProduct(values)
			}}
		>
			{() => (
				<Form>
					<div className='mb-3'>
						<label
							htmlFor='exampleInputTitle'
							className='form-label'
						>
							Title
						</label>
						<Field
							name='title'
							className='form-control'
							id='exampleInputTitle'
						/>
					</div>
					<div className='mb-3'>
						<label
							htmlFor='exampleInputDesc'
							className='form-label'
						>
							Description
						</label>
						<Field
							name='description'
							className='form-control'
							id='exampleInputDesc'
						/>
					</div>
					<button type='submit' className='btn btn-primary'>
						Create
					</button>
				</Form>
			)}
		</Formik>
	)
}

export default CreateProductForm
