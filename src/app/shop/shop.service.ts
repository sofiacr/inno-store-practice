import { Injectable } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Observable } from 'rxjs/Observable';
import { Shop } from './shop';

@Injectable()
export class ShopService {

    private target = 'shop';

    constructor(private dataService: DataService<Shop>) {
    }

    list(): Observable<Shop[]> {
        return this.dataService.list(this.target);
    }

    get(id: number | string): Observable<Shop> {
        return this.dataService.get(this.target, +id);
    }
}
