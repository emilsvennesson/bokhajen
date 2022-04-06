import { RequestManager, Client as rClient, WebSocketTransport } from "@open-rpc/client-js";
import { Book } from './Book.js';

const baseWebSocket = 'wss://admin.abicart.se/backend/jsonrpc/v1';
const baseSocketParams = {
    auth: '',
    language: 'sv',
    session: '',
    webshop: '22777'
};
const baseSearchParams = {
    'name': { 'sv': true },
    'articleNumber': true,
    'uid': true,
    'url': true,
    'price': true,
    'introductionText': { 'sv': true },
    'images': true,
    'description': { 'sv': true },
    'weight': true,
    'showPricesIncludingVat': true,
    'attributes': true,
    'ean': true
}
const bookCategories = [3331049, 3331050, 3331051]
const transport = new WebSocketTransport(`${baseWebSocket}?${new URLSearchParams(baseSocketParams).toString()}`);
const requestManager = new RequestManager([transport]);
const rclient = new rClient(requestManager);

const getSearchArticles = async (query: string) => {
    const result = await rclient.request({
        'method': 'Article.search',
        'params': [query]
    });
    return result;
}

const resultToBooksArray = (result: []) => {
    const books: Book[] = [];
    result.forEach(book => books.push(new Book(book)));
    return books;
}

export class Client {
    async search(query: string) {
        const searchArticles = await getSearchArticles(query);
        if (!searchArticles)
            return [];

        const payload = {
            method: 'Article.list',
            params: [baseSearchParams,
                {
                    'filters': {
                        '/showInArticlegroups': bookCategories,
                        '/uid': { 'in': searchArticles }
                    }
                }]
        };

        const result = await rclient.request(payload);
        return resultToBooksArray(result);
    }

    async getBook(uid: number) {
        const payload = {
            'method': 'Article.get',
            'params': [uid, true]
        }
        const result = await rclient.request(payload);
        return new Book(result);
    }

    async getBooks(limit: number, offset: number) {
        const payload = {
            method: 'Article.list',
            params: [baseSearchParams,
                {
                    'filters': {
                        '/showInArticlegroups': bookCategories
                    },
                    'limit': limit,
                    'offset': offset
                }]
        };

        const result = await rclient.request(payload);
        return resultToBooksArray(result);
    }

    close() {
        rclient.close();
    }
}
