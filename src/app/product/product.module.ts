import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product.list.component';
import { ProductDetailComponent } from './product.detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [ CommonModule, ProductRoutingModule, SharedModule ],
    declarations: [ ProductComponent, ProductListComponent, ProductDetailComponent ],
    exports: [ ProductComponent ],
    providers: [ ProductService ]
})
export class ProductModule {

}
