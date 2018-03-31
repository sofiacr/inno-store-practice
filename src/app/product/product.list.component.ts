import { Component } from '@angular/core';
import { Product } from './product';
import { OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product.list.component.html'
})
export class ProductListComponent implements OnInit {

    public products: Product[];

    constructor(
        private productService: ProductService
    ) {}

    ngOnInit(): void {
        this.productService.list()
            .subscribe(products => this.products = products);
    }
}
