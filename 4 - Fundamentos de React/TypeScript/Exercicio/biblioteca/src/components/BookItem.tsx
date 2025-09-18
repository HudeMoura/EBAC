import { type BookItemProps } from "../types/book";

export default function BookItem({ book, onDelete, onToggleStatus }: BookItemProps) {
  return (
    <li>
      <strong>{book.title}</strong> - {book.author} ({book.status})
      <button onClick={() => onDelete(book._id!)}>Remover</button>
      <button onClick={() => onToggleStatus(book._id!, book.status)}>
        Marcar como {book.status === "Lido" ? "Não lido" : "Lido"}
      </button>
    </li>
  );
}
