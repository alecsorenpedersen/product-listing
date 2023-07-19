import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/ProductList';
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<ProductList />
			</div>
		</Provider>
	);
}

export default App;
