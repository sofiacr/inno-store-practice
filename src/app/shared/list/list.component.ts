import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Product } from './list.model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({selector: 'app-list', templateUrl: './list.component.html', styleUrls: ['./list.component.css']})
export class ListComponent {

    @Input() products: Array<Product>;
    // tslint:disable-next-line:no-output-rename
    @Output('reverse') reverseList: EventEmitter<Array<Product>> = new EventEmitter<Array<Product>>();

    constructor() { }

    emitReverse(event) {
        this.reverseList.emit(this.products);
    }
}
