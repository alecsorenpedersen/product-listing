export type Product = {
	id: string;
	productName: string;
	image: {
		externalId: string;
		url: string;
		attributes: {
			imageAltText: string;
		};
	};
	price: {
		priceIncTax: number;
	};
	brand: {
		name: string;
	};
	sort: string;
};

export interface ProductsState {
	products: Product[];
	status: 'idle' | 'loading' | 'failed';
	sort: string;
}

export interface ProductProps {
	product: Product;
}
