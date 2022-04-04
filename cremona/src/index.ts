import { RequestManager, Client, WebSocketTransport } from "@open-rpc/client-js";

import { Book } from './book.js';

const baseUrl = 'wss://admin.abicart.se/backend/jsonrpc/v1'
const baseParams = {
    auth: '',
    language: 'sv',
    session: '',
    webshop: '22777'
}
const transport = new WebSocketTransport(`${baseUrl}?${new URLSearchParams(baseParams).toString()}`);
const requestManager = new RequestManager([transport]);
const client = new Client(requestManager);

const getSearchArticles = async (query: string) => {
    const result = await client.request({
        'method': 'Article.search',
        'params': [query]
    })
    return result;
}

const parseResult = (result : []) => {
    const books : Book[] = [];
    result.forEach((book) => {
        books.push(new Book(book));
    })
    return books;
}

export const search = async (query: string) => {
    const searchArticles = await getSearchArticles(query);
    if (!searchArticles)
        return []

    const payload = {
        method: 'Article.list',
        params: [
            {
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
            , { 'filters': { '/uid': { 'in': searchArticles } } }]
    }

    const result = await client.request(payload);
    client.close();

    return parseResult(result);
}

export const getBook = async (uid: number) => {
    const payload = {
        'method': 'Article.get',
        'params': [uid, true]
    }
    const result = await client.request(payload);
    client.close();
    return new Book(result);
}
