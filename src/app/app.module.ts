import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketProvider } from './shared/models/soscketprovide';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { SharedModule } from './admin/shared.module';
import { CommonModule } from '@angular/common';
import { SideBarService } from './admin/services/side-bar.service';
import { AdminComponent } from './admin/admin/admin.component';

import { FlashMessagesModule } from 'flash-messages-angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { VisitoraddComponent } from './pages/visitoradd/visitoradd.component';
import { VisitorComponent } from './pages/visitor/visitor.component';
import { VisitoreditComponent } from './pages/visitoredit/visitoredit.component';
import { OfferlistComponent } from './offer/offerlist/offerlist.component';
import { OfferaddComponent } from './offer/offeradd/offeradd.component';
import { HraddComponent } from './hr/hradd/hradd.component';
import { HrlistComponent } from './hr/hrlist/hrlist.component';
import { HreditComponent } from './hr/hredit/hredit.component';
import { OffereditComponent } from './offer/offeredit/offeredit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    VisitoraddComponent,
    VisitorComponent,
    VisitoreditComponent,
    OfferlistComponent,
    OfferaddComponent,
    HraddComponent,
    HrlistComponent,
    HreditComponent,
    OffereditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    FlashMessagesModule.forRoot(),

    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [CoreModule],
  providers: [SocketProvider, AuthService, AuthGuard, SideBarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
