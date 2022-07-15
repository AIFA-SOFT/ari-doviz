export interface MenuItem {
  id?: string;
  label?: string;
  icon?: string;
  command?: () => void;
  url?: string;
  routerLink?: string[];
  state?: any;
  items?: MenuItem[];
  expanded?: boolean;
  disabled?: boolean;
  visible?: boolean;
  style?: any;
  styleClass?: string;
  active?: boolean;
}
