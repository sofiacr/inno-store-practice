import { Injectable } from '@angular/core';
import { Product } from './list/list.model';


@Injectable()
export class DataService {

    private products: Array<Product> = [
        {
            id: 1001,
            description: 'Xiaomi Mi 1'
        },
        {
            id: 1002,
            description: 'HTC U11 Life'
        },
        {
            id: 1003,
            description: 'Motorola Moto X4'
        }
    ];

    constructor() {}

    getProducts(): Array<Product> {
        return this.products;
    }

    reverse(): any {
        this.products.reverse();
    }
}
