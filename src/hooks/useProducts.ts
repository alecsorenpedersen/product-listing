import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectProducts,
	selectProductsStatus,
} from '../reducers/productsSlice';
import { AppDispatch } from '../store';
import { fetchProducts } from '../services/api';

const useProducts = () => {
	const dispatch: AppDispatch = useDispatch();
	const products = useSelector(selectProducts);
	const status = useSelector(selectProductsStatus);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchProducts());
		}
		// eslint-disable-next-line
	}, []);

	return { products, status };
};

export default useProducts;
