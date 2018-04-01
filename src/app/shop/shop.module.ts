import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopService } from './shop.service';
import { ShopListComponent } from './shop.list.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopDetailComponent } from './shop.detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [ CommonModule, ShopRoutingModule, SharedModule ],
    declarations: [ ShopComponent, ShopListComponent, ShopDetailComponent ],
    exports: [ ShopComponent ],
    providers: [ ShopService ]
})
export class ShopModule {

}
