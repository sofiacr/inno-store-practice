import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopService } from './shop.service';
import { ShopListComponent } from './shop.list.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopDetailComponent } from './shop.detail.component';

@NgModule({
    imports: [ CommonModule, ShopRoutingModule ],
    declarations: [ ShopComponent, ShopListComponent, ShopDetailComponent ],
    exports: [ ShopComponent ],
    providers: [ ShopService ]
})
export class ShopModule {

}
