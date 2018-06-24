import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler,
    HttpRequest, HTTP_INTERCEPTORS, HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { logger } from '../logger';
import { HttpResponseError } from '../error/http-error';

const CODE_NOT_LOGIN = 1011;
const CODE_SUCCESS = 200;

@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let secureReq: HttpRequest<any> = req;
        if (req.url.includes('/api')) {
            const params = req.params.append('t', new Date().getTime().toString());
            secureReq = req.clone({
                withCredentials: true,
                params: params
            });
        }
        const started = Date.now();
        let ok: string;
        return next.handle(secureReq).pipe(
            tap(
                // Succeeds when there is a response; ignore other events
                event => {
                    const response = event as HttpResponse<any>;
                    ok = event instanceof HttpResponse ? 'succeeded' : '';
                    if (response.body) {
                        // filter  assets
                        if (response.url.includes('assets')) {
                            return;
                        }
                        // NOT LOGIN
                        if (response.body.code === CODE_NOT_LOGIN) {
                            window.location.href = '/login';
                        } else if (response.body.code !== CODE_SUCCESS) {
                            const error = new HttpResponseError(`code is not 200`, response.body.code, response.url, response.body);
                            error.method = req.method;
                            throw error;
                        } else {
                            (event as any).body = response.body.data;
                        }
                    }
                },
                error => {
                    error.method = req.method;
                    ok = 'failed';
                }
            ),
            finalize(() => {
                const elapsed = Date.now() - started;
                const msg = `${req.method} "${req.urlWithParams}" ${ok} in ${elapsed} ms.`;
                logger.info(msg);
            }));
    }

}
