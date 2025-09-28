import Layout from "../components/Layout/Layout";
import CardDestino from "../components/CardDestino/CardDestino";

const destinos = [
  { nome: "Rio de Janeiro", imagem: "/imagens/rio.jpg" },
  { nome: "Florianópolis", imagem: "/imagens/floripa.jpg" },
  { nome: "Gramado", imagem: "/imagens/gramado.jpg" },
  { nome: "Salvador", imagem: "/imagens/salvador.jpg" },
];

export default function Destinos() {
  return (
    <Layout>
      <h2>Destinos Turísticos</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1rem"
      }}>
        {destinos.map((d, index) => (
          <CardDestino key={index} nome={d.nome} imagem={d.imagem} />
        ))}
      </div>
    </Layout>
  );
}
