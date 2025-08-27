// Componente reutilizável de Produto
export default function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <div className="border rounded-xl shadow p-4 w-60">
      <img
        src={imagem}
        alt={nome}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{nome}</h2>
      <p className="text-gray-700">{descricao}</p>
      <p className="text-green-600 font-semibold">R$ {preco}</p>
    </div>
  );
}
