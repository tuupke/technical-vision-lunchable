import { json } from "@sveltejs/kit";
import type { Slide } from "../../../lib/types";

async function getSlides() {
  let slides: Slide[] = [];
  const paths = import.meta.glob('/src/slides/*.md', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Slide, 'slug'>;
      const slide = { ...metadata, slug } satisfies Slide;
      slides.push(slide);
    }
  }

  slides = slides.sort((first, second) => first.order - second.order);

  return slides;
}

export async function GET() {
  const slides = await getSlides();
  return json(slides);
}