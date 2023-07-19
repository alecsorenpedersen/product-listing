import { useDispatch, useSelector } from 'react-redux';
import { setFilters, selectFilters } from '../reducers/productsSlice';
import {
	FiltersWrapper,
	FilterOption,
	FilterCheckbox,
	FilterLabel,
} from './styles';
import { availableFilters } from './constants';

const Filters = () => {
	const dispatch = useDispatch();
	const activeFilters = useSelector(selectFilters);

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
