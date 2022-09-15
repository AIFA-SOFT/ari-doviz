export const servers = {
  real: 'wss://sslsocket.aifanet.com/89.19.27.85/34018'
};

interface Sarrafiye {
  code: string;
  eskiCode: string,
  yeniCode: string,
  eiscilik: string,
  yiscilik: string,
}

export const sarrafiyeList:Sarrafiye[] = [
  {code:'Çeyrek', eskiCode:'ECEYREK', yeniCode:'YCEYREK',eiscilik:'ECEYREK_ISC',yiscilik:'YCEYREK_ISC'},
  {code:'Yarım', eskiCode:'EYARIM', yeniCode:'YYARIM',eiscilik:'EYARIM_ISC',yiscilik:'YYARIM_ISC'},
  {code:'Tam', eskiCode:'ETAM', yeniCode:'YTAM',eiscilik:'ETAM_ISC',yiscilik:'YTAM_ISC'},
  // {code:'Gremse', eskiCode:'Eski Gremse', yeniCode:'Yeni Gremse'},
  // {code:'Ziynet 5', eskiCode:'Eski Ziynet 5', yeniCode:'Yeni Ziynet 5'},
  // {code:'Ata Çeyrek', eskiCode:'Eski Ata Çeyrek', yeniCode:'Yeni Ata Çeyrek'},
  // {code:'Ata Yarım', eskiCode:'Eski Çeyrek', yeniCode:'Yeni Çeyrek'},
  // {code:'Ata', eskiCode:'Eski Ata', yeniCode:'Yeni Ata'},
  // {code:'Ata 2,5', eskiCode:'Eski Ata 2,5', yeniCode:'Yeni Ata 2,5'},
  // {code:'Ata 5', eskiCode:'Eski Ata 5', yeniCode:'Yeni Ata 5'},
  // {code:'Reşat', eskiCode:'Eski Reşat', yeniCode:'Yeni Reşat'},
  ];


  export const gramList:Sarrafiye[] = [
    {code:'1GR 995', eskiCode:'1GR 995', yeniCode:'1GR 995',eiscilik:'1GR 995_ISC',yiscilik:'1GR 995_ISC'},
    {code:'5GR 995', eskiCode:'5GR 995', yeniCode:'5GR 995',eiscilik:'5GR 995_ISC',yiscilik:'5GR 995_ISC'},
    {code:'10GR 995', eskiCode:'10GR 995', yeniCode:'10GR 995',eiscilik:'10GR 995_ISC',yiscilik:'10GR 995_ISC'},
    {code:'20GR 995', eskiCode:'20GR 995', yeniCode:'20GR 995',eiscilik:'20GR 995_ISC',yiscilik:'20GR 995_ISC'},
    {code:'50GR 995', eskiCode:'50GR 995', yeniCode:'50GR 995',eiscilik:'50GR 995_ISC',yiscilik:'50GR 995_ISC'},
    {code:'100GR 995', eskiCode:'100GR 995', yeniCode:'100GR 995',eiscilik:'100GR 995_ISC',yiscilik:'100GR 995_ISC'}
    ];


