import { Component } from '@angular/core';
import { Product } from './product';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product.detail.component.html'
})
export class ProductDetailComponent implements OnInit {

    public product: Product;

    constructor(
        private productService: ProductService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.productService.get(id)
            .subscribe(product => this.product = product);
    }
}
