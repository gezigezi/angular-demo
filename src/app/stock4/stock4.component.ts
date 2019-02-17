import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
@Component({
  selector: 'app-stock4',
  templateUrl: './stock4.component.html',
  styleUrls: ['./stock4.component.css']
})
export class Stock4Component implements OnInit {
  private stock: Stock;
  private stockId: number;
  private isPro: boolean;
  private focus: boolean;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    //快照
    //节约资源，比较快，路由改变时，参数改变无法反应出来
    // this.stockId = this.routeInfo.snapshot.params['id'];
    //订阅
    //this.routeInfo.params.subscribe((params: Params) => this.stockId = params['id']);
    /**在路由配置中配参数 */
    this.isPro = this.routeInfo.snapshot.data[0]['isPro'];

  }
  isFocus() {
    return this.focus;
  }
}
export class Stock {
  constructor(public id: number,
    public mumber: string) { }
}