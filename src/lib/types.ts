export type Slide = {
  title: string;
  description: string;
  type: 'content' | 'code' | 'demo'
  order: number;
  slug: string;
}