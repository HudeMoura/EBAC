import Link from 'next/link';
import slugify from 'slugify';
import artigos from '../data/artigos.json';

export default async function HomePage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Artigos</h1>
      <ul>
        {artigos.map((artigo) => {
          const slug = slugify(artigo.title, { lower: true });
          return (
            <li key={artigo.id} style={{ margin: '12px 0' }}>
              <Link href={`/artigos/${slug}`}>
                {artigo.title}
              </Link>
              <div style={{ fontSize: 12, color: '#666' }}>
                {artigo.author} — {artigo.date}
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
