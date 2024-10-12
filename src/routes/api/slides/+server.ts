import { json } from "@sveltejs/kit";
// import type 
async function getSlides() {
  const slides = [];
  const paths = import.meta.glob('/src/slides/*.md', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');

    if (file && typeof file === 'object' && slug) {
      const metadata = file.metadata;
      const slide = { ...metadata, slug };
      slides.push(slide);
    }
  }

  return slides;
}

export async function GET() {
  const slides = await getSlides();
  return json(slides);
}