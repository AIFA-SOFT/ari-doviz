import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { SarrafiyeSocketData, SocketData } from '../shared/models/socketData';

import { CATEGORYTYPE } from '../shared/models/categoryType';
import { webSocket } from 'rxjs/internal/observable/dom/webSocket';
import { sarrafiyeList, servers } from '../shared/models/configuration';
import { ThemeService } from '../core/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  date: number = Date.now();
  lightTheme: boolean = false;
  connection = webSocket(servers.real);
  socketitems: SocketData[] = [];
  sarrafiyesocketitems: SarrafiyeSocketData[] = [];
  pariteList: SocketData[] = [];
  footerList: SocketData[] = [];
  footerListReplace: SocketData[] = [];
  pariteListReplace: SocketData[] = [];

  ngOnInit() {
    this.getData();
    this.getDovizData();
  }

  getData() {
    this.connection.subscribe((data: SocketData[] | any) => {
      this.socketitems = data.filter(
        (item: { Category: CATEGORYTYPE }) =>
          item.Category === CATEGORYTYPE.SARRAFIYE
      );

      sarrafiyeList.forEach((sarrafiye: any) => {
        var eskiSocketItem = this.socketitems.find(
          (e) => e.Code === sarrafiye.eskiCode
        );
        var yeniSocketItem = this.socketitems.find(
          (e) => e.Code === sarrafiye.yeniCode
        );
        var yeniiscilikSocketItem = this.socketitems.find(
          (e) => e.Code === sarrafiye.yiscilik
        );
        var eskiiscilikSocketItem = this.socketitems.find(
          (e) => e.Code === sarrafiye.eiscilik
        );
        if (
          eskiSocketItem &&
          yeniSocketItem &&
          eskiiscilikSocketItem &&
          yeniiscilikSocketItem
        ) {
          var sarrafiyesocketitem = this.sarrafiyesocketitems.find(
            (s) => s.Code === sarrafiye.code
          );

          if (sarrafiyesocketitem) {
            sarrafiyesocketitem.Eski = eskiSocketItem;
            sarrafiyesocketitem.Yeni = yeniSocketItem;
            sarrafiyesocketitem.Eiscilik = eskiiscilikSocketItem;
            sarrafiyesocketitem.Yiscilik = yeniiscilikSocketItem;
          } else {
            this.sarrafiyesocketitems.push({
              Code: sarrafiye.code,
              Eski: eskiSocketItem,
              Yeni: yeniSocketItem,
              Eiscilik: eskiiscilikSocketItem,
              Yiscilik: yeniiscilikSocketItem,
            });
          }
        }
      });
    });
  }

  constructor(private themeService: ThemeService) {}
  isShown: boolean = false;
  toggleTheme() {
    this.lightTheme = !this.lightTheme;
    this.themeService.toggleTheme();
  }

  getDovizData() {
    this.connection.subscribe((data: SocketData[] | any) => {
      if (this.footerList) {
        this.footerList = [];
      }

      data.forEach((item: SocketData) => {
        if (
          item.Category === CATEGORYTYPE.DOVIZ
        ) {
          this.footerList.push(item);
        }
        if (item.Category === CATEGORYTYPE.PARITE) {
          this.pariteList.push(item);
        }
      });
      if (this.footerListReplace.length !== 0) {
        if (
          JSON.stringify(this.footerListReplace) ===
          JSON.stringify(this.footerList),
          JSON.stringify(this.pariteList)
        ) {
        } else {
          this.footerList.forEach((data, index) => {
            if (data.Ask !== this.footerListReplace[index].Ask) {
              this.percentChange(data, this.footerListReplace[index], index);
            } else {
              data.askPercentChange = 0.0;
              this.footerListReplace[index].askPercentChange =
                data.askPercentChange;
            }
          });
          this.pariteList.forEach((data, index) => {
            if (data.Ask !== this.pariteListReplace[index].Ask) {
              this.percentChange(data, this.pariteListReplace[index], index);
            } else {
              data.askPercentChange = 0.0;
              this.pariteListReplace[index].askPercentChange =
                data.askPercentChange;
            }
          });
        }
      }

      else {
        this.footerListReplace = this.footerList;
        this.pariteListReplace = this.pariteList;
      }
    });
  }
  trackByPrice(index: number, code: any) {
    return code.Ask;
  }

  percentChange(newData: any, oldData: any, index: any) {
    if (newData.Ask != oldData.Ask) {
      let oldAskPrice = +oldData.Ask;
      let newAskPrice = +newData.Ask;
      let askPriceDifference = (1 - oldAskPrice / newAskPrice) * 100;
      newData.askPercentChange = +askPriceDifference.toFixed(2);
      newData.Time = Date.now();
      if (askPriceDifference < 0) {
        const code = newData.Code;
        const element = document.getElementById(code);
      } else if (askPriceDifference > 0) {
        const code = newData.Code;
        const element = document.getElementById(code);
      }
    }
  }
}
