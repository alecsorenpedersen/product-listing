import { useDispatch, useSelector } from 'react-redux';
import { setFilters, selectFilters } from '../reducers/productsSlice';

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
		<div>
			{availableFilters.map((filter) => (
				<div key={filter}>
					<input
						type='checkbox'
						id={filter}
						checked={activeFilters.includes(filter)}
						onChange={() => handleCheckboxChange(filter)}
					/>
					<label htmlFor={filter}>{filter}</label>
				</div>
			))}
		</div>
	);
};

export default Filters;
