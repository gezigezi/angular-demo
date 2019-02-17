import { Component } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private router: Router) { }
  toHomeDetail() {
    this.router.navigate(['/stock2', 2.2])
  }
  toStockDetail() {
    this.router.navigate(['/stock1', 1.2])
  }
}
