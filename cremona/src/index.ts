import { RequestManager, Client, WebSocketTransport } from "@open-rpc/client-js";

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

const getSearchArticles = async(query) => {
    const result = await client.request({
        'method': 'Article.search',
        'params': [query]
    })
    return result;
}

client.close();