import { MenuItem } from '../models/menu.model';

export const NAVIGATION_LINKS: MenuItem[] = [
  {
    label: 'Panel',
    icon: 'fa fa-tachometer',
    routerLink: ['admin'],
  },
  {
    label: 'Ziyaretçi Defteri',
    icon: 'fa fa-book',
    routerLink: ['visitor'],
  },
  {
    label: 'Görüş Ve Öneriler',
    icon: 'fa fa-book',
    routerLink: ['ofer'],
  },
  {
    label: 'İnsan Kaynakları',
    icon: 'fa fa-book',
    routerLink: ['hr'],
  }
];

export const ACCOUNT_LINKS:MenuItem[]=[

  {
    label: 'Çıkış Yap',
    icon:'fas fa-sign-out-alt'
  }
];
