import { Book, CremonaClient } from 'cremona';

const client = new CremonaClient();
console.log('SearchService.ts');
const minLength = 3;

export default class SearchService {
  static async search(
    query: string,
    limit?: number,
    offset?: number,
  ): Promise<Book[]> {
    if (query.length < minLength) {
      return [];
    }
    let books: Book[] = [];
    try {
      books = await client.search(query, limit, offset);
    } catch (e) {
      console.log(e);
    }
    return books;
  }
}
