import { Component } from '@angular/core';
import { Router, UrlHandlingStrategy } from "@angular/router";
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
  ngOnInit(){
    this.changeUrl();
  }
  changeUrl(){
    let text=window.location.href;
    text.toString();
    debugger
    let url=text.replace(/#/,'index.html#');
    window.history.pushState({},'0',url);
  }
}
