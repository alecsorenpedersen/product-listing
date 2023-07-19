import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchProducts } from '../services/api';
import { Product, ProductsState } from '../types';

const initialState: ProductsState = {
	products: [],
	status: 'idle',
	sort: 'default',
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setSort: (state, action: PayloadAction<string>) => {
			state.sort = action.payload;
		},
	},
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

export const { setSort } = productsSlice.actions;

export default productsSlice.reducer;

export const selectProducts = (state: RootState) => {
	switch (state.products.sort) {
		case 'lowToHigh':
			return [...state.products.products].sort(
				(a: Product, b: Product) => a.price.priceIncTax - b.price.priceIncTax,
			);
		case 'highToLow':
			return [...state.products.products].sort(
				(a: Product, b: Product) => b.price.priceIncTax - a.price.priceIncTax,
			);
		default:
			return state.products.products;
	}
};
export const selectProductsStatus = (state: RootState) => state.products.status;
export const selectSort = (state: RootState) => state.products.sort;
