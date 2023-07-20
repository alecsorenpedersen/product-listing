import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, toggleFilter } from '../reducers/productsSlice';
import AppliedFilters from './AppliedFilters';
import SortDropdown from './SortDropdown';
import {
	FilterOption,
	FilterCheckbox,
	FilterLabel,
	FiltersSection,
} from '../styles/styles';
import { availableFilters } from '../constants';

type FilterSectionProps = {
	productCount: number;
};

const Filters = ({ productCount }: FilterSectionProps) => {
	const dispatch = useDispatch();
	const filters = useSelector(selectFilters);

	return (
		<FiltersSection
			initial={{ x: '-100vw', opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ type: 'spring', stiffness: 120 }}>
			<p>Sort By:</p>
			<SortDropdown />
			<div>{productCount} results</div>
			<h2>Filter By:</h2>
			{filters.length > 0 && <AppliedFilters />}
			<h3>Price:</h3>
			{availableFilters.map((filter) => (
				<FilterOption key={filter}>
					<FilterCheckbox
						type='checkbox'
						id={filter}
						checked={filters.includes(filter)}
						onChange={() => dispatch(toggleFilter(filter))}
					/>
					<FilterLabel htmlFor={filter}>£{filter}</FilterLabel>
				</FilterOption>
			))}
		</FiltersSection>
	);
};

export default Filters;
