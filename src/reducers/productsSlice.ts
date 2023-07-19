import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchProducts } from '../services/api';
import { ProductsState } from '../types';
import { Filters } from '../types/types';
import {
	filterProductsByPrice,
	sortProductsByPrice,
} from '../utils/helperFunctions';
import { FAILED, IDLE, LOADING } from '../constants';

const initialState: ProductsState = {
	products: [],
	status: IDLE,
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

		toggleFilter: (state, action: PayloadAction<string>) => {
			const filterIndex = state.filters.indexOf(action.payload);
			if (filterIndex >= 0) {
				state.filters.splice(filterIndex, 1);
			} else {
				state.filters.push(action.payload);
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.status = LOADING;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = IDLE;
				state.products = action.payload.products;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = FAILED;
				state.products = [];
			});
	},
});

export const { setSort, setFilters, toggleFilter } = productsSlice.actions;
export default productsSlice.reducer;

export const selectProducts = (state: RootState) => {
	let filteredProducts = filterProductsByPrice(
		state.products.products,
		state.products.filters,
	);
	return sortProductsByPrice(filteredProducts, state.products.sort);
};

export const selectProductsStatus = (state: RootState) => state.products.status;
export const selectSort = (state: RootState) => state.products.sort;
export const selectFilters = (state: RootState) => state.products.filters;
