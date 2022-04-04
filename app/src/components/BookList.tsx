
interface BookListProps {
    books: Array<String>;
    createCard: Function;
    length: Number;
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
    <ul>
        {props.books.map((title) => props.createCard(title))}
    </ul> 
    );
}

export default BookList;

