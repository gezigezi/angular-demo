
import { CanDeactivate } from "@angular/router";
import { Stock3Component } from "app/stock3/stock3.component";

export class FocusGuard implements CanDeactivate<Stock3Component> {
    canDeactivate(component: Stock3Component) {
        if (component.isFocus()) {
            return true;
        } else {
            return window.confirm('不关注就离开吗？这股票能赚钱呦！')
        }
    }
}