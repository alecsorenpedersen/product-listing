import { useDispatch, useSelector } from 'react-redux';
import { setFilters, selectFilters } from '../reducers/productsSlice';
import {
	AppliedFiltersContainer,
	AppliedFiltersTitle,
	AppliedFilter,
	AppliedFilterText,
	RemoveFilterButton,
} from '../styles/styles';

const AppliedFilters = () => {
	const dispatch = useDispatch();
	const filters = useSelector(selectFilters);

	const removeFilter = (filter: string) => {
		dispatch(setFilters(filters.filter((f) => f !== filter)));
	};

	return (
		<AppliedFiltersContainer>
			<AppliedFiltersTitle>Applied Filters:</AppliedFiltersTitle>
			{filters.map((filter) => (
				<AppliedFilter key={filter}>
					<AppliedFilterText>£{filter}</AppliedFilterText>
					<RemoveFilterButton
						onClick={() => removeFilter(filter)}
						whileHover={{ rotate: 100 }}
						whileFocus={{ rotate: 100 }}
						transition={{ type: 'spring', stiffness: 300 }}>
						{' '}
						❌{' '}
					</RemoveFilterButton>
				</AppliedFilter>
			))}
		</AppliedFiltersContainer>
	);
};

export default AppliedFilters;
