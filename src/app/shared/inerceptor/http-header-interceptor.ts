import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpProgressEvent, HttpHeaderResponse, HttpSentEvent, HttpResponse, HttpUserEvent } from '@angular/common/http';

export class HttpHeaderInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent |
            HttpResponse<any> | HttpUserEvent<any>> {

        console.log('HTTP interceptor:Adding header');
        const clone = req.clone({ headers: req.headers.set('companyname', 'innocv')});
        return next.handle(clone).catch((err: any) => {
            console.log(err);
            return Observable.throw(err);
        });
    }
}
