import { Book, CremonaClient } from 'cremona';

const client = new CremonaClient();
const MIN_LENGTH = 3;

export default class CremonaService {
  static async search(
    query: string,
    limit?: number,
    offset?: number,
  ): Promise<Book[]> {
    if (query.length < MIN_LENGTH) {
      return [];
    }
    let books: Book[] = [];
    try {
      books = await client.search(query, limit, offset);
    } catch (e) {
      // TODO: Handle error
      throw new Error(`Could not search for books with query: ${query}`);
    }
    return books;
  }

  static async getBook(uid: number): Promise<Book> {
    let book: Book;
    try {
      const [retrievedBook] = await client.getBook(uid);
      book = retrievedBook;
    } catch (e) {
      // TODO: Handle error
      throw new Error(`Could not get book with uid: ${uid}`);
    }
    return book;
  }

  static async getBooks(
    limit?: number | undefined,
    offset?: number | undefined,
  ): Promise<Book[]> {
    let books: Book[];
    try {
      books = await client.getBooks(limit, offset);
    } catch (e) {
      // TODO: Handle error
      throw new Error('Could not get books');
    }
    return books;
  }
}
