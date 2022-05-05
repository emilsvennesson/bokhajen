import { Book, CremonaClient } from 'cremona';

const client = new CremonaClient();
const MIN_LENGTH = 3;

export default class SearchService {
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
    }
    return books;
  }
}
