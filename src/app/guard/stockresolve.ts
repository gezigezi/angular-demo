import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Stock } from '../stock4/stock4.component';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
@Injectable()
export class StockResolve implements Resolve<Stock>{
    constructor(private router: Router) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Stock | Observable<Stock> | Promise<Stock> {
        let id = route.params['id'];
        if (id == 4) {
            return new Stock(1, 'RMB');
        } else {
            this.router.navigate(['/home']);
            return undefined;
        }
    }
}