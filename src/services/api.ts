import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, API_URL } from './constants';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		const requestPayload = {
			query: 'toilets',
		};

		try {
			const response = await axios.post(
				`${API_URL}?${API_KEY}`,
				requestPayload,
			);

			return response.data;
		} catch (err: any) {
			throw new Error(
				`An error occurred while fetching products: ${err.message}`,
			);
		}
	},
);
