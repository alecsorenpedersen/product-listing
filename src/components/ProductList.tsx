import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectProducts,
	selectProductsStatus,
} from '../reducers/productsSlice';
import { AppDispatch } from '../store';
import Product from './Product';
import { fetchProducts } from '../services/api';

const ProductList = () => {
	const dispatch: AppDispatch = useDispatch();
	const products = useSelector(selectProducts);
	const status = useSelector(selectProductsStatus);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchProducts());
		}
	}, []);

	let content;

	if (status === 'loading') {
		content = <div>Loading...</div>;
	} else if (status === 'failed') {
		content = <div>Error loading products</div>;
	} else if (status === 'idle') {
		content = (
			<div>
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		);
	}

	return (
		<div>
			<h1>Products</h1>
			{content}
		</div>
	);
};

export default ProductList;
