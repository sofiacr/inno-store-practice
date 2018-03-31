import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product.list.component';
import { ProductDetailComponent } from './product.detail.component';

const productRoutes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'product/:id', component: ProductDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(productRoutes)],
    exports: [ RouterModule ]
})
export class ProductRoutingModule {}
