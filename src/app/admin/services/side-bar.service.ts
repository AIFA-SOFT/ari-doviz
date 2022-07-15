import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SideBarService {
  private sideBarState: boolean = true;
  private navBarState: boolean = false;

  private onSidebarToggle$: BehaviorSubject<SidebarEvent> =
    new BehaviorSubject<SidebarEvent>({ oppened: this.sideBarState });

  private onNavbarToggle$: BehaviorSubject<SidebarEvent> =
    new BehaviorSubject<SidebarEvent>({ oppened: this.navBarState });

  constructor() {}

  public get onSidebarToggle() {
    return this.onSidebarToggle$.asObservable();
  }

  public get onNavbarToggle() {
    return this.onNavbarToggle$.asObservable();
  }

  public sidebarToggle(): void {
    this.sideBarState = !this.sideBarState;
    this.onSidebarToggle$.next({ oppened: this.sideBarState });
  }

  public navbarToggle(): void {
    this.navBarState = !this.navBarState;
    this.onNavbarToggle$.next({ oppened: this.navBarState });
  }
}

export interface SidebarEvent {
  oppened: boolean;
}
