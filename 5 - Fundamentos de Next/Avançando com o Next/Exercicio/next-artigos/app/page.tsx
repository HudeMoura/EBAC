import artigos from "@/data/artigos.json";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Lista de Artigos</h1>
      <ul>
        {artigos.map((artigo) => (
          <li key={artigo.slug}>
            <Link href={`/artigos/${artigo.slug}`}>
              {artigo.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}