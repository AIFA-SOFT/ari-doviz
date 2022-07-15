import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PricefooterComponent } from "../shared/components/pricefooter/pricefooter.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { SocialNavComponent } from './components/social-nav/social-nav.component';
import { CurrencyCalculatorComponent } from './components/currency-calculator/currency-calculator.component';
import { FormsModule } from "@angular/forms";
import { TestComponent } from "../home/components/test/test.component";
import { FooterComponent } from './components/footer/footer.component';

// const components = [


// ];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule,FormsModule],
  exports: [ ]
})
export class CoreModule { }
