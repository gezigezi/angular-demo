import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { StockComponent } from 'app/stock/stock.component';
import { Stock1Component } from 'app/stock1/stock1.component';
import { Stock2Component } from 'app/stock2/stock2.component';
import { Stock3Component } from 'app/stock3/stock3.component';
import { Code404Component } from "app/code404/code404.component";
import { BuyerListComponent } from "app/buyer-list/buyer-list.component";
import { SellerListComponent } from "app/seller-list/seller-list.component";
import { ConsultComponent } from "app/consult/consult.component";
import { PermissionGuard } from "app/guard/permissionguard";
import { FocusGuard } from "app/guard/focusguard";
import { StockResolve } from "app/guard/stockresolve";
import { Stock4Component } from "app/stock4/stock4.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'consult', component: ConsultComponent, outlet: 'oux' },
  { path: 'stock', component: StockComponent },
  { path: 'stock1/:id', component: Stock1Component },
  { path: 'stock2/:id', component: Stock2Component },
  {
    path: 'stock3/:id', component: Stock3Component, data: [{ isPro: true }], children: [
      { path: ':id', component: BuyerListComponent },
      { path: 'seller/:id', component: SellerListComponent }
    ],
    canActivate: [PermissionGuard],
    canDeactivate: [FocusGuard]
  },
  {
    path: 'stock4/:id', component: Stock4Component, data: [{ isPro: true }],
    resolve: {
      stock: StockResolve
    }
  },
  { path: '**', component: Code404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
