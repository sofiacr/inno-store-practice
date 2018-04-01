import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ShopService } from './shop.service';
import { Shop } from './shop';

@Component({
    templateUrl: './shop.list.component.html'
})
export class ShopListComponent implements OnInit {

    public shops: Shop[];

    constructor(
        private shopService: ShopService
    ) {}

    ngOnInit(): void {
        this.shopService.list()
            .subscribe(shops => this.shops = shops);
    }
}
