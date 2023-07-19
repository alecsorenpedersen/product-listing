import { Product } from '../types';
import { Filters } from '../types/types';

export const filterProductsByPrice = (
	products: Product[],
	filters: Filters,
): Product[] => {
	if (filters.length > 0) {
		return products.filter((product) =>
			filters.some((filter) => {
				const [lower, upper] = filter.split('-').map(Number);
				return (
					product.price.priceIncTax >= lower &&
					product.price.priceIncTax <= upper
				);
			}),
		);
	}
	return products;
};

export const sortProductsByPrice = (
	products: Product[],
	sort: string,
): Product[] => {
	let sortedProducts = [...products];

	switch (sort) {
		case 'lowToHigh':
			sortedProducts.sort(
				(a: Product, b: Product) => a.price.priceIncTax - b.price.priceIncTax,
			);
			break;
		case 'highToLow':
			sortedProducts.sort(
				(a: Product, b: Product) => b.price.priceIncTax - a.price.priceIncTax,
			);
			break;
		default:
			break;
	}

	return sortedProducts;
};
