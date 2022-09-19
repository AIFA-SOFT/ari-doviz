import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DateDiffPipe } from "./pipes/dateDiff.pipe";
import { HomeComponent } from "../home/home.component";
import { SarrafComponent } from "../home/components/sarraf/sarraf.component";
import { GramComponent } from "../home/components/gram/gram.component";
import { ChartComponent } from './components/chart/chart.component';
import { HighchartsChartModule } from "highcharts-angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PariteComponent } from "../home/components/parite/parite.component";
import { PricefooterComponent } from "./components/pricefooter/pricefooter.component";
import { SocialNavComponent } from "../core/components/social-nav/social-nav.component";
import { NavBarComponent } from "../core/components/nav-bar/nav-bar.component";
import { RouterModule } from "@angular/router";
import { AboutComponent } from "../home/components/about/about.component";
import { OfferPageComponent } from "../home/components/offer-page/offer-page.component";
import { FooterComponent } from "../core/components/footer/footer.component";
import { HrFormComponent } from "../home/components/hr-form/hr-form.component";
import { OfferFormUiComponent } from "../home/components/offer-form-ui/offer-form-ui.component";
import { ContactComponent } from "../home/components/contact/contact.component";
import { CurrencyCalculatorComponent } from "../core/components/currency-calculator/currency-calculator.component";
import { TabelaComponent } from "../home/components/tabela/tabela.component";


@NgModule({
  declarations: [
    DateDiffPipe,
    NavBarComponent,
    HomeComponent,
    SarrafComponent,
    GramComponent,
    ChartComponent,
    PariteComponent,
    FooterComponent,
    HrFormComponent,
    OfferFormUiComponent,
    ContactComponent,
    CurrencyCalculatorComponent,
    TabelaComponent,



    SocialNavComponent,
    PricefooterComponent,
    AboutComponent,
    OfferPageComponent
  ],
  imports: [CommonModule,HighchartsChartModule,FormsModule, ReactiveFormsModule, RouterModule],
  // exports: [...shared]
})
export class SharedModule { }
