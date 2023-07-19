import { useSelector, useDispatch } from 'react-redux';
import { selectSort, setSort } from '../reducers/productsSlice';

const useSort = () => {
	const dispatch = useDispatch();
	const sort = useSelector(selectSort);

	const onSortChange = (value: any) => dispatch(setSort(value));

	return { sort, onSortChange };
};

export default useSort;
