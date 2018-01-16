import { Component } from '@angular/core';
import { Product } from './shared/list/list.model';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private products: Array<Product>;

  constructor(private _dataService: DataService) {
    this.products = _dataService.getProducts();
  }

  reverseList(event) {
    this._dataService.reverse();
  }
}
