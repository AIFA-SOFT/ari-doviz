import { Component, OnInit, Input } from '@angular/core';
import { NAVIGATION_LINKS } from '../../constants/navigation-links.const';
import { MenuItem } from '../../models/menu.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @Input() menuLinks: MenuItem[] | undefined;

  constructor() {}

  ngOnInit() {}

  logout() {
    localStorage.removeItem('loggedIn');
  }
}
