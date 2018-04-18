import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LabelPipe } from './shared/label/label.pipe';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './shared/auth/auth.service';
import { ProductModule } from './product/product.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShopModule } from './shop/shop.module';
import { AuthGuard } from './auth-guard.service';
import { HttpHeaderInterceptor } from './shared/inerceptor/http-header-interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    LoginModule,
    ProductModule,
    ShopModule,
    AppRoutingModule,
  ],
  providers: [AuthService, AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
