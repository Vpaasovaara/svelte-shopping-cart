import type { Product } from '$lib/types';

export const load = async () => {
	const products = await fetch('https://dummyjson.com/products').then((res) => res.json());

	return {
		products: products.products as Product[]
	};
};
