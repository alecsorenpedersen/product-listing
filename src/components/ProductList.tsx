import Product from './Product';
import useProducts from '../hooks/useProducts';
import { Content, Container, ProductListWrapper } from '../styles/styles';
import { FAILED, IDLE, LOADING } from '../constants';
import Filters from './Filters';
import LoadingSpinner from './LoadingSpinner';

const ProductList = () => {
	const { products, status } = useProducts();

	if (status === LOADING) {
		return <LoadingSpinner />;
	}

	if (status === FAILED) {
		return <div>Error loading products</div>;
	}

	return (
		<Container>
			<ProductListWrapper>
				<Filters productCount={products.length} />
				{status === IDLE && (
					<Content>
						{products.map((product) => (
							<Product key={product.id} product={product} />
						))}
					</Content>
				)}
			</ProductListWrapper>
		</Container>
	);
};

export default ProductList;
