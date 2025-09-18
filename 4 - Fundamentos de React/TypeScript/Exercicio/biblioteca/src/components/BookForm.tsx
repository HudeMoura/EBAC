import { useState } from "react";
import { type BookFormProps } from "../types/book";

export default function BookForm({ onAdd }: BookFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState<"Lido" | "Não lido">("Não lido");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !author) return;
    onAdd({ title, author, status });
    setTitle("");
    setAuthor("");
    setStatus("Não lido");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value as "Lido" | "Não lido")}>
        <option value="Não lido">Não lido</option>
        <option value="Lido">Lido</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
}
