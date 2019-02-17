import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
@Component({
  selector: 'app-stock3',
  templateUrl: './stock3.component.html',
  styleUrls: ['./stock3.component.css']
})
export class Stock3Component implements OnInit {
  private stock: number;
  private stockId: number;
  private isPro: boolean;
  private focus: boolean;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    //快照
    //节约资源，比较快，路由改变时，参数改变无法反应出来
    this.stockId = this.routeInfo.snapshot.params['id'];
    //订阅
    //this.routeInfo.params.subscribe((params: Params) => this.stockId = params['id']);
    /**在路由配置中配参数 */
    this.isPro = this.routeInfo.snapshot.data[0]['isPro'];

  }
  isFocus() {
    return this.focus;
  }
}
