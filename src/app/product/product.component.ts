import { Component } from '@angular/core';
import { Product } from './product';
import { OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    private static TARGET = 'product';
    public products: Product[];

    constructor(
        private dataService: DataService<Product>
    ) {}

    ngOnInit(): void {
        this.dataService.list(ProductComponent.TARGET)
            .subscribe(products => this.products = products);
    }
}
