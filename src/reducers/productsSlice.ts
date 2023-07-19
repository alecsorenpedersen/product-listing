import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchProducts } from '../services/api';
import { ProductsState } from '../types';

const initialState: ProductsState = {
	products: [],
	status: 'idle',
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = 'idle';
				state.products = action.payload.products;
			})
			.addCase(fetchProducts.rejected, (state) => {
				state.status = 'failed';
				state.products = [];
			});
	},
});

export default productsSlice.reducer;

export const selectProducts = (state: RootState) => state.products.products;
export const selectProductsStatus = (state: RootState) => state.products.status;
