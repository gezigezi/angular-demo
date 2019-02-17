import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Code404Component } from './code404/code404.component';
import { Stock1Component } from './stock1/stock1.component';
import { Stock2Component } from './stock2/stock2.component';
import { Stock3Component } from './stock3/stock3.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { ConsultComponent } from './consult/consult.component';
import { PermissionGuard } from "app/guard/permissionguard";
import { FocusGuard } from "app/guard/focusguard";
import { StockResolve } from "app/guard/stockresolve";
import { Stock4Component } from './stock4/stock4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockComponent,
    Code404Component,
    Stock1Component,
    Stock2Component,
    Stock3Component,
    BuyerListComponent,
    SellerListComponent,
    ConsultComponent,
    Stock4Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PermissionGuard, FocusGuard, StockResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
