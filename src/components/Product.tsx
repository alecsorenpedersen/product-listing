import { ProductProps } from '../types';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProductCard = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	border: 1px solid #ddd;
	border-radius: 10px;
	background-color: #fff;
	box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease-out;
`;

const ProductImage = styled.img`
	height: 200px;
	width: 200px;
	object-fit: cover;
	border-radius: 10px;
`;

const ProductName = styled.h2`
	font-size: 1.2rem;
	font-weight: bold;
	text-align: center;
	color: #333;
	margin-bottom: 10px;
`;

const ProductPrice = styled.p`
	color: #888;
`;

const Product = ({ product }: ProductProps) => {
	return (
		<ProductCard
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 50 }}
			transition={{ duration: 0.5 }}
			whileHover={{ scale: 1.05 }}>
			<ProductImage src={product.image.url} alt={product.image.externalId} />

			<ProductName>{product.productName}</ProductName>
			<ProductPrice>£{product.price.priceIncTax.toFixed(2)}</ProductPrice>
		</ProductCard>
	);
};

export default Product;
