import { error } from '@sveltejs/kit';
import type { Slide } from '../../lib/types.js';

export async function load({ params, fetch }) {
	try {
		const slide = await import(`../../slides/${params.slug}.md`);
		const response = await fetch('api/slides');
		const slides: Slide[] = await response.json();

		const indexOfCurrent = slides.findIndex((s) => s.slug === params.slug);
		const previous = indexOfCurrent === 0 ? '/' : slides[indexOfCurrent - 1].slug;
		const next =
			indexOfCurrent === slides.length - 1 ? params.slug : slides[indexOfCurrent + 1].slug;
		const total = slides.length;

		return {
			content: slide.default,
			meta: slide.metadata as Slide,
			next,
			previous,
			total,
			current: indexOfCurrent + 1
		};
	} catch (e: unknown) {
		error(404, `Could not find ${params.slug} ${e}`);
	}
}
