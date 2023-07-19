import { useDispatch, useSelector } from 'react-redux';
import { setFilters, selectFilters } from '../reducers/productsSlice';
import styled from 'styled-components';

const FiltersWrapper = styled.div`
	padding: 20px;

	border-radius: 5px;
	width: 100%;
	box-sizing: border-box;
`;

const FilterOption = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;

const FilterCheckbox = styled.input`
	margin-right: 10px;
`;

const FilterLabel = styled.label`
	font-size: 16px;
	color: #333;
`;

const Filters = () => {
	const dispatch = useDispatch();
	const activeFilters = useSelector(selectFilters);
	const availableFilters = [
		'0-99',
		'100-299',
		'300-699',
		'700-999',
		'1000-3000',
	];

	const handleCheckboxChange = (filter: string) => {
		if (activeFilters.includes(filter)) {
			dispatch(setFilters(activeFilters.filter((f) => f !== filter)));
		} else {
			dispatch(setFilters([...activeFilters, filter]));
		}
	};

	return (
		<FiltersWrapper>
			<h2>Price:</h2>
			{availableFilters.map((filter) => (
				<FilterOption key={filter}>
					<FilterCheckbox
						type='checkbox'
						id={filter}
						checked={activeFilters.includes(filter)}
						onChange={() => handleCheckboxChange(filter)}
					/>
					<FilterLabel htmlFor={filter}>£{filter}</FilterLabel>
				</FilterOption>
			))}
		</FiltersWrapper>
	);
};

export default Filters;
