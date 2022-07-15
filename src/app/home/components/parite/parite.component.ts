import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { CATEGORYTYPE } from 'src/app/shared/models/categoryType';
import { sarrafiyeList, servers } from 'src/app/shared/models/configuration';
import { SarrafiyeSocketData, SocketData } from 'src/app/shared/models/socketData';

@Component({
  selector: 'app-parite',
  templateUrl: './parite.component.html',
  styleUrls: ['./parite.component.scss']
})
export class PariteComponent implements OnInit {
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
    this.getDovizData();
  }


  getDovizData() {
    this.connection.subscribe((data: SocketData[] | any) => {
      if (this.footerList) {
        this.footerList = [];
      }

      data.forEach((item: SocketData) => {
        if (
          item.Category === CATEGORYTYPE.PARITE
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
