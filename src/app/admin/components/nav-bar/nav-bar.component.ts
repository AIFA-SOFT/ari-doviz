import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/model/user.model';
import { SLIDE_UP_DONW } from '../../constants/animations.const';
import { MenuItem } from '../../models/menu.model';
import { SideBarService } from '../../services/side-bar.service';
import { ThemeEnum, ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: SLIDE_UP_DONW,
})
export class NavBarComponent implements OnInit, OnDestroy {
  @Input() menuLinks: MenuItem[] | undefined;
  @Input() title:string|undefined;
  @Input() accountName: string | undefined;
  @Input() accountDetails: string | undefined;
  @Input() accountLinks: MenuItem[] | undefined;

  toggleProfileDropdown: boolean = false;
  isDarkMode: boolean = false;
  user?: User;

  private subscription: Subscription;

  constructor(
    public sidebarService: SideBarService,
    public themeService: ThemeService,
    private authService: AuthService
  ) {
    this.subscription = this.themeService.onChange.subscribe((event) => {
      switch (event.theme) {
        case ThemeEnum.LIGHT: {
          this.isDarkMode = false;
          break;
        }
        case ThemeEnum.DARK: {
          this.isDarkMode = true;
          break;
        }
      }
    });
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }




  ngOnInit() {}

  logout() {
   localStorage.removeItem('user');
  }

}
