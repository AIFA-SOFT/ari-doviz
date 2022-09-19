import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { OfferFormUiComponent } from './components/offer-form-ui/offer-form-ui.component';
import { ContactComponent } from './components/contact/contact.component';
import { TabelaComponent } from './components/tabela/tabela.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: HomeComponent,
    },]),
    SharedModule
  ],
  declarations: [
  ],
})
export class HomeModule { }
