import { useEffect, useState } from "react";
import axios from "axios";
import { type Book } from "./types/book";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

const API_URL = "https://crudcrud.com/api/e57becbec7934562b1109650338ae16a/books";

export default function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    const res = await axios.get(API_URL);
    setBooks(res.data);
  };

  const addBook = async (book: Omit<Book, "_id">) => {
    const res = await axios.post(API_URL, book);
    setBooks((prev) => [...prev, res.data]);
  };

  const deleteBook = async (id: string) => {
    await axios.delete(`${API_URL}/${id}`);
    setBooks((prev) => prev.filter((b) => b._id !== id));
  };

  const toggleStatus = async (id: string, currentStatus: "Lido" | "Não lido") => {
    const newStatus = currentStatus === "Lido" ? "Não lido" : "Lido";
    const book = books.find((b) => b._id === id);
    if (!book) return;

    await axios.put(`${API_URL}/${id}`, { ...book, status: newStatus });
    fetchBooks();
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>📚 Minha Biblioteca</h1>
      <BookForm onAdd={addBook} />
      <BookList books={books} onDelete={deleteBook} onToggleStatus={toggleStatus} />
    </div>
  );
}
