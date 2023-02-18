export type Blog = {
	id?: string;
	country: string;
	city: string;
	image: string;
	title: string;
	body: string;
	createdAt?: Date;
};

export type Link = {
	href: string;
	text: string;
	icon?: string;
};
