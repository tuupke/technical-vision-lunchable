export async function load({ fetch }) {
	const response = await fetch('api/slides');
	const slides = await response.json();
	return { slides };
}
