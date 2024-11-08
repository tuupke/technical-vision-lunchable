export type Slide = {
	title: string;
	subtitle?: string;
	type: 'content' | 'code' | 'demo' | 'ship';
	order: number;
	slug: string;
};
