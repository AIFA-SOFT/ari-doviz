import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themeState: ThemeEnum = ThemeEnum.LIGHT;

  private onThemeChange$: BehaviorSubject<ThemeChangeEvent> =
    new BehaviorSubject<ThemeChangeEvent>({ theme: this.themeState });

  constructor() { }

  public get onChange(): Observable<ThemeChangeEvent> {
    return this.onThemeChange$.asObservable();
  }

  public themeToggle(): void {
    this.themeState === ThemeEnum.LIGHT ? this.themeState = ThemeEnum.DARK : this.themeState = ThemeEnum.LIGHT;
    this.onThemeChange$.next({ theme: this.themeState });
  }

}

export interface ThemeChangeEvent {
  theme: ThemeEnum;
}

export enum ThemeEnum {
  LIGHT = 'light',
  DARK = 'dark'
}