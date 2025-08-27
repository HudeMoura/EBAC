import { useEffect, useState } from "react";
import ProdutoCard from "../components/ProdutoCard";

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  // State do formulário
  const [form, setForm] = useState({
    nome: "",
    preco: "",
    descricao: "",
    imagem: "",
  });

  // Simulação de API
  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        {
          id: 1,
          nome: "Teclado Gamer",
          preco: 259.90,
          descricao: "Camiseta estilosa para devs.",
          imagem:
            "teclado.jpg",
        },
        {
          id: 2,
          nome: "Mouse Gamer",
          preco: 129.9,
          descricao: "Mouse com alta precisão.",
          imagem: 
            "./mouse.jpg",
        },
      ]);
      setLoading(false);
    }, 1500); // 1,5s de simulação
  }, []);

  // Controle dos inputs
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Submissão do formulário
  function handleSubmit(e) {
    e.preventDefault();
    const novoProduto = {
      id: Date.now(),
      ...form,
      preco: parseFloat(form.preco),
    };

    setProdutos([...produtos, novoProduto]);

    // Limpar o formulário
    setForm({
      nome: "",
      preco: "",
      descricao: "",
      imagem: "",
    });
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Catálogo de Produtos
      </h1>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 border rounded-xl shadow mb-8"
      >
        <h2 className="text-xl mb-4 font-semibold">Adicionar Produto</h2>

        <input
          type="text"
          name="nome"
          placeholder="Nome do produto"
          value={form.nome}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-2"
        />

        <input
          type="number"
          step="0.01"
          name="preco"
          placeholder="Preço"
          value={form.preco}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-2"
        />

        <input
          type="text"
          name="descricao"
          placeholder="Descrição"
          value={form.descricao}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-2"
        />

        <input
          type="text"
          name="imagem"
          placeholder="URL da imagem"
          value={form.imagem}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Adicionar
        </button>
      </form>

      {/* Lista de Produtos */}
      {loading ? (
        <p className="text-center text-gray-600">Carregando...</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {produtos.map((produto) => (
            <ProdutoCard key={produto.id} {...produto} />
          ))}
        </div>
      )}
    </div>
  );
}
