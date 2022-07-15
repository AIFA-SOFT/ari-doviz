import { Component, ElementRef, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { webSocket } from 'rxjs/internal/observable/dom/webSocket';
import { CATEGORYTYPE } from 'src/app/shared/models/categoryType';
import { gramList, sarrafiyeList, servers } from 'src/app/shared/models/configuration';
import { SarrafiyeSocketData, SocketData } from 'src/app/shared/models/socketData';
import { ThemeService } from '../../services/theme.service';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  date: number = Date.now();
  lightTheme: boolean = false;
  connection = webSocket(servers.real);
  socketitems: SocketData[] = [];
  sarrafiyesocketitems: SarrafiyeSocketData[] = [];
  pariteList: SocketData[] = [];
  footerList: SocketData[] = [];
  footerListReplace: SocketData[] = [];
  miktar:any;
  sonuc:any;
  secilen:any;
  myDropDown : string="";

  constructor(private themeService: ThemeService) {}
  isShown: boolean = false;
  toggleTheme() {
    this.lightTheme = !this.lightTheme;
    this.themeService.toggleTheme();
  }
  ngOnInit() {
    this.CurrencyConverter();
  }


  CurrencyConverter() {
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
        // console.log(item.Ask * this.miktar);
      }
    });
    if (this.footerListReplace.length !== 0) {
      if (JSON.stringify(this.footerListReplace) === JSON.stringify(this.footerList)) {
      } else {
        this.footerList.forEach((data, index) => {


        // this.sonuc = this.secilen * this.miktar ;

          if (data.Ask !== this.footerListReplace[index].Ask) {
            this.percentChange(data, this.footerListReplace[index], index);
          } else {
            data.askPercentChange = 0.00;
            this.footerListReplace[index].askPercentChange = data.askPercentChange;
            // console.log(data.Ask * this.miktar);

          }
        });
      }
    } else {
      this.footerListReplace = this.footerList;
    }
  });

}





onChangeofOptions(newGov: any) {
  //  console.log(newGov);
    newGov = newGov;
    this.sonuc =  newGov * this.miktar ;
    console.log(this.sonuc);
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
