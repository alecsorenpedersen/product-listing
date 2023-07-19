import { ProductProps } from '../types';
import {
	ImageWrapper,
	ProductCard,
	ProductImage,
	ProductName,
	ProductPrice,
} from '../styles/styles';

const Product = ({ product }: ProductProps) => {
	return (
		<ProductCard
			whileHover={{ scale: 1.05 }}
			initial={{ rotateY: 90, opacity: 0 }}
			animate={{ rotateY: 0, opacity: 1 }}
			transition={{ delay: 0.11, duration: 0.2 }}>
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
