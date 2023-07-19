import { useSelector } from 'react-redux';
import { selectFilters } from '../reducers/productsSlice';

const useFilters = () => {
	const filters = useSelector(selectFilters);

	return filters;
};

export default useFilters;
