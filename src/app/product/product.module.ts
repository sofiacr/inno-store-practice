import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product.list.component';
import { ProductDetailComponent } from './product.detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [ CommonModule, ProductRoutingModule, SharedModule, ReactiveFormsModule ],
    declarations: [ ProductComponent, ProductListComponent, ProductDetailComponent, AddProductComponent ],
    exports: [ ProductComponent ],
    providers: [ ProductService ]
})
export class ProductModule {

}
