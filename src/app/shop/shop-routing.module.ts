import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { ShopListComponent } from './shop.list.component';
import { ShopDetailComponent } from './shop.detail.component';

const shopRoutes: Routes = [
    { path: 'shops', component: ShopComponent, children: [
        { path: '', component: ShopListComponent },
        { path: ':id', component: ShopDetailComponent }
    ] }
];

@NgModule({
    imports: [ RouterModule.forChild(shopRoutes)],
    exports: [ RouterModule ]
})
export class ShopRoutingModule {}
