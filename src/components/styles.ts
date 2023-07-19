import { motion } from 'framer-motion';
import styled from 'styled-components';

export const FiltersWrapper = styled.div`
	padding: 20px;
	border-radius: 5px;
	width: 100%;
	box-sizing: border-box;
`;

export const FilterOption = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;

export const FilterCheckbox = styled.input`
	margin-right: 10px;
`;

export const FilterLabel = styled.label`
	font-size: 16px;
	color: #333;
`;
export const ProductCard = styled(motion.div)`
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid #ddd;
	border-radius: 10px;
	background-color: #fff;
	box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease-out;
`;

export const ProductImage = styled.img`
	height: 200px;
	width: 200px;
	object-fit: cover;
	border-radius: 10px;
`;
export const ImageWrapper = styled.div`
	width: auto;
	justify-content: center;
`;

export const ProductName = styled.h2`
	font-size: 0.9rem;
	text-align: left;
	color: #333;
`;

export const ProductPrice = styled.p`
	font-size: 2rem;
	text-align: left;
	color: #cf0010;
	font-weight: bold;
	margin: 0;
`;

export const Container = styled.div`
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 1200px;
	padding: 10px;
	box-sizing: border-box;
`;

export const ProductListWrapper = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 3fr;
	column-gap: 2em;
	padding: 20px;
`;

export const FilterSection = styled.div`
	padding: 20px;
	background-color: #fff;
	border-radius: 5px;
	box-sizing: border-box;
	border: 1px solid #ddd;
	border-radius: 10px;
	box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease-out;
`;

export const Content = styled.div`
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

export const SortSelect = styled.select`
	padding: 10px;
	border-radius: 5px;
	border: 1px solid #ddd;
	margin-bottom: 20px;
`;
