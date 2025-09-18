import { type BookListProps } from "../types/book";
import BookItem from "./BookItem";

export default function BookList({ books, onDelete, onToggleStatus }: BookListProps) {
  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book._id}
          book={book}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </ul>
  );
}
