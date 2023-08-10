import { createAsyncThunk } from '@reduxjs/toolkit'
import { createProduct, getAllProducts } from '../../api/products'

export const getAllProductsThunk = createAsyncThunk('products/getAll', () =>
	getAllProducts()
)

export const createProductThunk = createAsyncThunk('products/create', (body) =>
	createProduct(body)
)
