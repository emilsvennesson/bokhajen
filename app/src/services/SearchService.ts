import { Book, CremonaClient } from 'cremona';

const client = new CremonaClient();
console.log('SearchService.ts');
const minLength = 3;

export default class SearchService {
  static async search(query: string): Promise<Book[]> {
    if (query.length < minLength) {
      return [];
    }
    let books: Book[] = [];
    try {
      books = await client.search(query);
    } catch (e) {
      console.log(e);
    }
    return books;
  }
}
