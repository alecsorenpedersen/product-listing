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
};

export interface ProductsState {
	products: Product[];
	status: 'idle' | 'loading' | 'failed';
}

export interface ProductProps {
	product: Product;
}
