import { Book } from "cremona/dist/Book";

interface Props {
    newBook: Book;
}

export default function BookDetailView({newBook}: Props) {
    const book: Book = newBook;
    console.log(book);
}
