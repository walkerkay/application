export class HttpResponseError extends Error {

    name = 'HttpResponseError';

    code: number;

    url?: string;

    body?: any;

    method?: string;

    constructor(message: string, code: number, url?: string, body?: any) {
        super(message);
        this.code = code;
        this.url = url;
        this.body = body;
    }
}
