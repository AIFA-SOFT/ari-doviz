 import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SLIDE_IN_OUT, SLIDE_UP_DONW } from '../constants/animations.const';
import { ACCOUNT_LINKS, NAVIGATION_LINKS,} from '../constants/navigation-links.const';
import { MenuItem } from '../models/menu.model';
import { SideBarService } from '../services/side-bar.service';
import { ThemeEnum, ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: SLIDE_IN_OUT

})
export class AdminComponent implements OnInit {

  private subscription: Subscription;
  menuLinks: MenuItem[] = NAVIGATION_LINKS;
  accountLinks: MenuItem[] = ACCOUNT_LINKS;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public sidebarService: SideBarService,
    private themeService: ThemeService
  ) {
    this.subscription = this.themeService.onChange.subscribe((event) => {
      switch (event.theme) {
        case ThemeEnum.LIGHT: {
          this.document.body.classList.remove('dark');
          break;
        }
        case ThemeEnum.DARK: {
          this.document.body.classList.add('dark');
          break;
        }
      }
    });
  }
  ngOnInit(){}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
