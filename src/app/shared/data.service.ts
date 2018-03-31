import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpHeaders } from '@angular/common/http';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class DataService<T> {

    private base = 'http://localhost:8080/curso-angular-api/api/';

    constructor(private http: HttpClient) {}

    list(target: string): Observable<T[]> {
        return this.http.get<T[]>(this.base + target)
            .catch(this.handleError);
    }

    get(target: string, id: number): Observable<T> {
        const url = `${this.base}/${id}`;
        return this.http.get<T>(url)
            .catch(this.handleError);
    }

    add(target: string, object: T): Observable<T> {
        return this.http.post(this.base + target, object, cudOptions)
            .catch(this.handleError);
    }

    update(target: string, object: T): Observable<T> {
        return this.http.put(this.base + target, object, cudOptions)
            .catch(this.handleError);
    }

    delete(target: string, id: number): Observable<void> {
        const url = `${this.base}/${id}`;
        return this.http.delete(url)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        return Observable.throw(error);
    }
}
