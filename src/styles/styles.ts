import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const boxShadow = css`
	box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const borderRadius = css`
	border-radius: 10px;
`;

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
	${boxShadow}
	${borderRadius}
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid #ddd;
	background-color: #fff;
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
	overflow: hidden;
`;

export const ProductListWrapper = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 3fr;
	column-gap: 2em;
	padding: 20px;
`;

export const FiltersSection = styled(motion.div)`
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

export const AppliedFiltersContainer = styled.div`
	padding: 10px;
	background-color: #f5f5f5;
	border-radius: 5px;
	margin-bottom: 10px;
`;

export const AppliedFiltersTitle = styled.p`
	margin: 0;
	margin-bottom: 5px;
	font-weight: 600;
`;

export const AppliedFilter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px 10px;
	margin-bottom: 5px;
	border-radius: 5px;
	background-color: #fff;
`;

export const AppliedFilterText = styled.span`
	margin-right: 10px;
`;

export const RemoveFilterButton = styled(motion.button)`
	border: none;
	background: none;
	color: #f00;
	cursor: pointer;
`;
