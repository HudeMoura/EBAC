import { notFound } from 'next/navigation';
import slugify from 'slugify';
import artigos from '../../../data/artigos.json';

interface Params {
  params: { slug: string };
}

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return artigos.map((a) => ({ slug: slugify(a.title, { lower: true }) }));
}

export async function generateMetadata({ params }: Params) {
  const artigo = artigos.find(a => slugify(a.title, { lower: true }) === params.slug);
  if (!artigo) return { title: 'Artigo não encontrado', description: 'Artigo inexistente' };

  return {
    title: artigo.title,
    description: `${artigo.title} — por ${artigo.author}`
  };
}

export default async function ArtigoPage({ params }: Params) {
  const artigo = artigos.find(a => slugify(a.title, { lower: true }) === params.slug);
  if (!artigo) return notFound();

  return (
    <article style={{ padding: 24 }}>
      <h1>{artigo.title}</h1>
      <div style={{ fontSize: 14, color: '#666' }}>
        {artigo.author} — {artigo.date}
      </div>
      <section style={{ marginTop: 16 }}>
        <p>{artigo.content}</p>
      </section>
    </article>
  );
}
