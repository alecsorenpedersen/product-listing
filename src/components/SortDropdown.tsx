import useSort from '../hooks/useSort';
import { SortSelect } from '../styles/styles';

const SortDropdown = () => {
	const { sort, onSortChange } = useSort();

	return (
		<>
			<p>Sort By:</p>
			<SortSelect
				value={sort}
				onChange={(e) => onSortChange(e.target.value)}
				id='sort-by'
				aria-label='Sort by'>
				<option value='default'>Recommended</option>
				<option value='lowToHigh'>Price: Low to High</option>
				<option value='highToLow'>Price: High to Low</option>
			</SortSelect>
		</>
	);
};

export default SortDropdown;
