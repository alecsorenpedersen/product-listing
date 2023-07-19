import { ProductProps } from '../types';

const Product = ({ product }: ProductProps) => {
	return (
		<div>
			<img src={product.image.url} alt={product.image.externalId} />
			<p>{product.brand.name}</p>
			<p>{product.price.priceIncTax}</p>
		</div>
	);
};

export default Product;
