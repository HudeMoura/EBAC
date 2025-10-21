import { Metadata } from "next";
import artigos from "@/data/artigos.json";

type PageProps = {
  params: Promise<{ slug: string}>;
};

// Página dinâmica
export default async function ArtigoPage({ params }: PageProps) {
  const { slug } = await params;
  const artigo = artigos.find((a) => a.slug === slug);

  if (!artigo) {
    return <h1>Artigo não encontrado</h1>;
  }

  return (
    <article>
      <h1>{artigo.titulo}</h1>
      <p><strong>Autor:</strong> {artigo.autor}</p>
      <p><strong>Publicado em:</strong> {artigo.data}</p>
      <div>{artigo.conteudo}</div>
    </article>
  );
}

// Gerar rotas estáticas
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return artigos.map((a) => ({ slug: a.slug }));
}

// SEO dinâmico
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const artigo = artigos.find((a) => a.slug === slug);

  return {
    title: artigo ? artigo.titulo : "Artigo não encontrado",
    description: artigo
      ? artigo.conteudo.substring(0, 150)
      : "Nenhum artigo disponível",
  };
}
