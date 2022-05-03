import { Book, CremonaClient } from 'cremona';

export default class SearchService {
  static async search(query: string): Promise<Book[]> {
    const client = new CremonaClient();
    const books = await client.search(query);
    client.close();
    return books;
  }
}
