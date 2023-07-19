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

const ProductList = () => {
	const filters = useSelector(selectFilters);
	const { products, status } = useProducts();

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
			<SortDropdown />
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
