import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Shop } from './shop';
import { DataService } from '../shared/data.service';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

    private static TARGET = 'shop';
    private shops: Shop[];

    constructor(
        private dataService: DataService<Shop>
    ) {}

    ngOnInit(): void {
        this.dataService.list(ShopComponent.TARGET)
            .subscribe(shops => this.shops = shops);
    }

}
