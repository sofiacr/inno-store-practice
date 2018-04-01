import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product.list.component';
import { ProductDetailComponent } from './product.detail.component';
import { AuthGuard } from '../auth-guard.service';

const productRoutes: Routes = [
    { path: 'products', component: ProductComponent, children: [
        { path: '', component: ProductListComponent, canActivate: [ AuthGuard ] },
        { path: ':id', component: ProductDetailComponent, canActivate: [ AuthGuard ]}
    ], canActivate: [ AuthGuard ] }
];

@NgModule({
    imports: [ RouterModule.forChild(productRoutes)],
    exports: [ RouterModule ]
})
export class ProductRoutingModule {}
