export interface Book {
  _id?: string;
  title: string;
  author: string;
  status: "Lido" | "Não lido";
}

export interface BookItemProps {
  book: Book;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string, currentStatus: "Lido" | "Não lido") => void;
}

export interface BookListProps {
  books: Book[];
  onDelete: (id: string) => void;
  onToggleStatus: (id: string, currentStatus: "Lido" | "Não lido") => void;
}

export interface BookFormProps {
  onAdd: (book: Omit<Book, "_id">) => void;
}
