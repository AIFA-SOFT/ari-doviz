import {Component, OnInit} from '@angular/core';
import {webSocket} from 'rxjs/webSocket';
import {servers} from '../../models/configuration';
import {SocketData} from '../../models/socketData';
import {CATEGORYTYPE} from '../../models/categoryType';
import { ThemeService } from '../../../../app/core/services/theme.service';

@Component({
  selector: 'app-pricefooter',
  templateUrl: './pricefooter.component.html',
  styleUrls: ['./pricefooter.component.scss']
})
export class PricefooterComponent implements OnInit {
  connection = webSocket(servers.real);
  footerList: SocketData[] = [];
  footerListReplace: SocketData[] = [];
  date: number = Date.now();
  lightTheme: boolean = false;
  constructor(private themeService: ThemeService) { }
  isShown:boolean=false;



  toggleTheme() {
    this.lightTheme = !this.lightTheme;
    this.themeService.toggleTheme();
  }
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.connection.subscribe((data: SocketData[]| any) => {
      if (this.footerList) {
        this.footerList = [];
      }

      data.forEach((item: SocketData) => {
        if (item.Category === CATEGORYTYPE.DOVIZ || item.Category === CATEGORYTYPE.PARITE) {
          this.footerList.push(item);
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
