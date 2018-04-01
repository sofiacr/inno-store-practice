import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Shop } from './shop';
import { ShopService } from './shop.service';

@Component({
    templateUrl: './shop.detail.component.html'
})
export class ShopDetailComponent implements OnInit {

    public shop: Shop;

    constructor(
        private shopService: ShopService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.shopService.get(id)
            .subscribe(shop => this.shop = shop);
    }

}
