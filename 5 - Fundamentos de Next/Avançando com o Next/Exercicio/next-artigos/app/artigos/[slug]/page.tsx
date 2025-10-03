import { Metadata } from "next";
import artigos from "@/data/artigos.json";

type PageProps = {
  params: {
    slug: string;
  };
};

// 🔹 Metadata dinâmica
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const artigo = artigos.find((a) => a.slug === params.slug);

  if (!artigo) {
    return {
      title: "Artigo não encontrado",
      description: "O artigo solicitado não foi encontrado",
    };
  }

  return {
    title: artigo.titulo,
    description: artigo.conteudo.slice(0, 100) + "...",
  };
}

// 🔹 Página
export default async function ArtigoPage({ params }: PageProps) {
  const artigo = artigos.find((a) => a.slug === params.slug);

  if (!artigo) {
    return <h1>Artigo não encontrado</h1>;
  }

  return (
    <article>
      <h1>{artigo.titulo}</h1>
      <p><strong>Autor:</strong> {artigo.autor}</p>
      <p><strong>Publicado em:</strong> {artigo.data}</p>
      <div>
        <p>{artigo.conteudo}</p>
      </div>
    </article>
  );
}

// 🔹 SSG (gera as páginas estáticas no build)
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return artigos.map((a) => ({
    slug: a.slug,
  }));
}
