import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, selectFilters } from '../reducers/productsSlice';

const AppliedFilters = () => {
	const dispatch = useDispatch();
	const filters = useSelector(selectFilters);

	const removeFilter = (filter: string) => {
		dispatch(setFilters(filters.filter((f) => f !== filter)));
	};

	return (
		<div>
			<h2>Applied Filters:</h2>
			{filters.map((filter) => (
				<div key={filter}>
					<span>{filter}</span>
					<button onClick={() => removeFilter(filter)}>Remove</button>
				</div>
			))}
		</div>
	);
};

export default AppliedFilters;
