import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectProducts,
	selectProductsStatus,
	setSort,
	selectSort,
	selectFilters,
} from '../reducers/productsSlice';
import { AppDispatch } from '../store';
import Product from './Product';
import { fetchProducts } from '../services/api';
import Filters from './Filters';
import AppliedFilters from './AppliedFilters';
import styled from 'styled-components';

const Container = styled.div`
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 1200px;
	padding: 10px;
	box-sizing: border-box;
`;

const ProductListWrapper = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 3fr;
	column-gap: 2em;
	padding: 20px;
`;

const FilterSection = styled.div`
	padding: 20px;
	background-color: #fff;
	border-radius: 5px;
	box-sizing: border-box;
	border: 1px solid #ddd;
	border-radius: 10px;
	box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease-out;
`;

const Content = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(3, 1fr);

	@media (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const SortSelect = styled.select`
	padding: 10px;
	border-radius: 5px;
	border: 1px solid #ddd;
	margin-bottom: 20px;
`;

const ProductList = () => {
	const dispatch: AppDispatch = useDispatch();
	const products = useSelector(selectProducts);
	const status = useSelector(selectProductsStatus);
	const sort = useSelector(selectSort);
	const filters = useSelector(selectFilters);

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
			<Content>
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</Content>
		);
	}

	return (
		<>
			<h1>Filter By:</h1>
			<SortSelect
				value={sort}
				onChange={(e) => dispatch(setSort(e.target.value))}>
				<option value='default'>Reccomended</option>
				<option value='lowToHigh'>Price: Low to High</option>
				<option value='highToLow'>Price: High to Low</option>
			</SortSelect>
			<Container>
				<ProductListWrapper>
					<FilterSection>
						{filters.length > 0 && <AppliedFilters />}
						<Filters />
					</FilterSection>
					{content}
				</ProductListWrapper>
			</Container>
		</>
	);
};

export default ProductList;
