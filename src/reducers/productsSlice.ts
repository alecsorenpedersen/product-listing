import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchProducts } from '../services/api';
import { Product, ProductsState } from '../types';
import { Filters } from '../types/types';

const initialState: ProductsState = {
	products: [],
	status: 'idle',
	sort: 'default',
	filters: [],
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setSort: (state, action: PayloadAction<string>) => {
			state.sort = action.payload;
		},
		setFilters: (state, action: PayloadAction<Filters>) => {
			state.filters = action.payload;
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

export const { setSort, setFilters } = productsSlice.actions;
export default productsSlice.reducer;

export const selectProducts = (state: RootState) => {
	let filteredProducts = [...state.products.products];

	if (state.products.filters.length > 0) {
		filteredProducts = filteredProducts.filter((product) =>
			state.products.filters.some((filter) => {
				const [lower, upper] = filter.split('-').map(Number);
				return (
					product.price.priceIncTax >= lower &&
					product.price.priceIncTax <= upper
				);
			}),
		);
	}

	switch (state.products.sort) {
		case 'lowToHigh':
			return [...filteredProducts].sort(
				(a: Product, b: Product) => a.price.priceIncTax - b.price.priceIncTax,
			);
		case 'highToLow':
			return [...filteredProducts].sort(
				(a: Product, b: Product) => b.price.priceIncTax - a.price.priceIncTax,
			);
		default:
			return filteredProducts;
	}
};
export const selectProductsStatus = (state: RootState) => state.products.status;
export const selectSort = (state: RootState) => state.products.sort;
export const selectFilters = (state: RootState) => state.products.filters;
