import { Injectable } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

    private target = 'product';

    constructor(private dataService: DataService<Product>) {
    }

    list(): Observable<Product[]> {
        return this.dataService.list(this.target);
    }

    get(id: number | string): Observable<Product> {
        return this.dataService.get(this.target, +id);
    }
}
