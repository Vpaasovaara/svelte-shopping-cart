export type Product = {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	tags: string[];
	brand: string;
	sku: string;
	weight: number;
	dimensions: Dimensions;
	warrantyInformation: string;
	shippingInformation: string;
	availibilityStatus: string;
	reviews: string[];
	returnPolicy: string;
	minimumOrderQuantity: number;
	meta: string;
	thumbnail: string;
	images: string[];
};

export type Dimensions = {
	width: number;
	height: number;
	depth: number;
};

export type Review = {
	rating: number;
	comment: string;
	date: string;
	reviewerName: string;
	reviewerEmail: string;
};
