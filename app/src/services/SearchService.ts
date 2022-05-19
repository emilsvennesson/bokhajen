import { Book } from 'cremona';
import CremonaService from './CremonaService';

export default class SearchService {
  static async search(
    query: string,
    limit?: number,
    offset?: number,
  ): Promise<Book[]> {
    return CremonaService.search(query, limit, offset);
  }
}
