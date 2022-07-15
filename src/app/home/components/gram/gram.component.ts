import { Component, OnInit } from '@angular/core';
import { webSocket } from 'rxjs/internal/observable/dom/webSocket';
import { CATEGORYTYPE } from 'src/app/shared/models/categoryType';
import { gramList, servers } from 'src/app/shared/models/configuration';
import { SarrafiyeSocketData, SocketData } from 'src/app/shared/models/socketData';

@Component({
  selector: 'app-gram',
  templateUrl: './gram.component.html',
  styleUrls: ['./gram.component.scss'],
})
export class GramComponent implements OnInit {

  connection = webSocket(servers.real);
  socketitems: SocketData[] = [];
  sarrafiyesocketitems: SarrafiyeSocketData[] = [];
  pariteList: SocketData[] = [];
  footerList: SocketData[] = [];
  footerListReplace: SocketData[] = [];
  date: number = Date.now();

  constructor() { }


  ngOnInit() {
    this.getData();
    this.getDovizData();
    // console.log(this.sarrafiyesocketitems);



  }

  getData() {
    this.connection.subscribe((data: SocketData[] | any) => {
      this.socketitems = data.filter(
        (item: { Category: CATEGORYTYPE }) =>
          item.Category === CATEGORYTYPE.GRAM
      );
      // console.log(this.socketitems);

      gramList.forEach((sarrafiye: any) => {
        // console.log(sarrafiye);

        var eskiSocketItem = this.socketitems.find(
          (e) => e.Code === sarrafiye.eskiCode
        );
        // console.log(eskiSocketItem);
        var yeniSocketItem = this.socketitems.find(
          (e) => e.Code === sarrafiye.yeniCode
        );
        var yeniiscilikSocketItem = this.socketitems.find(
          (e) => e.Code === sarrafiye.yiscilik
        );
        var eskiiscilikSocketItem = this.socketitems.find(
          (e) => e.Code === sarrafiye.eiscilik
        );
        // console.log(yeniSocketItem);
        if (eskiSocketItem && yeniSocketItem && eskiiscilikSocketItem && yeniiscilikSocketItem) {
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





















getDovizData() {
  this.connection.subscribe((data: SocketData[]| any) => {
    if (this.footerList) {
      this.footerList = [];
    }

    data.forEach((item: SocketData) => {
      if (item.Category === CATEGORYTYPE.DOVIZ || item.Category === CATEGORYTYPE.PARITE) {
        this.footerList.push(item);
      }
      if (  item.Category === CATEGORYTYPE.PARITE) {
        this.pariteList.push(item);
      }
    });
    if (this.footerListReplace.length !== 0) {
      if (JSON.stringify(this.footerListReplace) === JSON.stringify(this.footerList)) {

      } else {
        this.footerList.forEach((data, index) => {
          if (data.Ask !== this.footerListReplace[index].Ask) {
            this.percentChange(data, this.footerListReplace[index], index);
          } else {
            data.askPercentChange = 0.00;
            this.footerListReplace[index].askPercentChange = data.askPercentChange;
          }
        });
      }
    } else {
      this.footerListReplace = this.footerList;
    }
  });

}

trackByPrice(index: number, code:any) {
  return code.Ask;
}

percentChange(newData:any, oldData:any, index:any) {
  if (newData.Ask != oldData.Ask) {
    let oldAskPrice = +oldData.Ask;
    let newAskPrice = +newData.Ask;
    let askPriceDifference = (1 - (oldAskPrice / newAskPrice)) * 100;
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
