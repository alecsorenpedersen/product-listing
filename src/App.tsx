import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/ProductList';
import './App.css';
import { Footer, Layout } from '../src/components/Footer';
import Navbar from './components/Header';

function App() {
	return (
		<Provider store={store}>
			<Layout>
				<header>
					<Navbar />
				</header>
				<main>
					<article>
						<div className='App'>
							<ProductList />
						</div>
					</article>
				</main>
				<footer>
					<Footer />
				</footer>
			</Layout>
		</Provider>
	);
}

export default App;
