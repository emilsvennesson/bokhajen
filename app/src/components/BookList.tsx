import './css/BookList.css';

interface BookListProps {
    books: Array<String>;
    createCard: Function;
    length: number;
}

/**
 * This will represent a list of books
 * @param props books: Array of books
 * @param props createCard: Function that takes a book an returns a card
 * @param props length: total number of list items
 * @returns a BookList component
 */
 const BookList: React.FC<BookListProps> = ({ books, createCard, length }) => {
    return ( 
    <ul className='bookList'>
        {books.slice(0, length).map((title) => createCard(title))}
    </ul> 
    );
}

export default BookList;

