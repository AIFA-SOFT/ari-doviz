export class SocketData {
  Code: string='';
  Category: string='';
  Description: string='';
  Bid: number=0;
  Ask: number=0;
  askPercentChange: number=0;
  bidPercentChange: number=0;
  Time: Date=new Date();
}

export class SarrafiyeSocketData {
  Code: string='';
  Eski: any;
  Yeni: any;
  Eiscilik: any;
  Yiscilik: any;
}
