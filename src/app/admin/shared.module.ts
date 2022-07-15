import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { SideBarService } from "./services/side-bar.service";




@NgModule({
    declarations: [
      NavBarComponent,
      SideBarComponent,
      FooterComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
      NavBarComponent,
      SideBarComponent,
      FooterComponent,
    ],
    providers: [
        SideBarService
    ]
})
export class SharedModule { }
