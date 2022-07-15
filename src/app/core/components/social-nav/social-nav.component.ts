import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-social-nav',
  templateUrl: './social-nav.component.html',
  styleUrls: ['./social-nav.component.scss']
})
export class SocialNavComponent implements OnInit {

  lightTheme: boolean = false;
  constructor(private themeService: ThemeService) { }

  ngOnInit() {
  }
  toggleTheme() {
    this.lightTheme = !this.lightTheme;
    this.themeService.toggleTheme();
  }
}
