import useSort from '../hooks/useSort';
import { SortSelect } from './styles';

const SortDropdown = () => {
	const { sort, onSortChange } = useSort();

	return (
		<SortSelect value={sort} onChange={(e) => onSortChange(e.target.value)}>
			<option value='default'>Recommended</option>
			<option value='lowToHigh'>Price: Low to High</option>
			<option value='highToLow'>Price: High to Low</option>
		</SortSelect>
	);
};

export default SortDropdown;
