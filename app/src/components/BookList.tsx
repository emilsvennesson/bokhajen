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
function BookList(props: BookListProps) {
    return ( 
    <ul className='bookList'>
        {props.books.slice(0, props.length).map((title) => props.createCard(title))}
    </ul> 
    );
}

export default BookList;

