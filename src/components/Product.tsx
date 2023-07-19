import { ProductProps } from '../types';
import {
	ImageWrapper,
	ProductCard,
	ProductImage,
	ProductName,
	ProductPrice,
} from './styles';

const Product = ({ product }: ProductProps) => {
	return (
		<ProductCard animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05 }}>
			<ImageWrapper>
				<ProductImage
					src={product.image.url}
					alt={product.image.externalId}
					loading='lazy'
				/>
			</ImageWrapper>

			<ProductName>{product.productName}</ProductName>
			<ProductPrice>£{product.price.priceIncTax.toFixed(2)}</ProductPrice>
		</ProductCard>
	);
};

export default Product;
