import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const slide = await import(`../../slides/${params.slug}.md`)

		return {
			content: slide.default,
			meta: slide.metadata
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}
