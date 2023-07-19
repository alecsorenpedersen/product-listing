import { useSelector } from 'react-redux';
import { selectFilters } from '../reducers/productsSlice';
import Product from './Product';
import Filters from './Filters';
import AppliedFilters from './AppliedFilters';
import useProducts from '../hooks/useProducts';
import SortDropdown from './SortDropdown';
import {
	Content,
	Container,
	ProductListWrapper,
	FilterSection,
} from './styles';
import { FAILED, IDLE, LOADING } from '../constants';

const ProductList = () => {
	const filters = useSelector(selectFilters);
	const { products, status } = useProducts();

	if (status === LOADING) {
		return <div>Loading...</div>;
	}

	if (status === FAILED) {
		return <div>Error loading products</div>;
	}

	return (
		<>
			<h1>Filter By:</h1>
			<SortDropdown />
			<Container>
				<ProductListWrapper>
					<FilterSection>
						{filters.length > 0 && <AppliedFilters />}
						<Filters />
					</FilterSection>
					{status === IDLE && (
						<Content>
							{products.map((product) => (
								<Product key={product.id} product={product} />
							))}
						</Content>
					)}
				</ProductListWrapper>
			</Container>
		</>
	);
};

export default ProductList;
