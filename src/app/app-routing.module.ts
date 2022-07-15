import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
// import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { AboutComponent } from './home/components/about/about.component';
import { ContactComponent } from './home/components/contact/contact.component';
import { HrFormComponent } from './home/components/hr-form/hr-form.component';
import { OfferPageComponent } from './home/components/offer-page/offer-page.component';
import { HomeComponent } from './home/home.component';
import { HreditComponent } from './hr/hredit/hredit.component';
import { HrlistComponent } from './hr/hrlist/hrlist.component';
import { OfferlistComponent } from './offer/offerlist/offerlist.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VisitorComponent } from './pages/visitor/visitor.component';
import { VisitoreditComponent } from './pages/visitoredit/visitoredit.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home',  loadChildren: () => import('./home/home.module').then((m) => m.HomeModule), },
  {path:'about', component:AboutComponent},
  {path:'comment', component:OfferPageComponent},
  {path:'contact', component:ContactComponent},
  {path:'hr-form', component:HrFormComponent},
  {
    path: 'login',
    component: LoginComponent,
    children: [{ path: ':id/:name', component: LoginComponent }],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {  path:'', component:DashboardComponent,   canActivate:[AuthGuard]}, // dashboard
      {  path:'visitor',  component:VisitorComponent, canActivate:[AuthGuard] },

      {  path:'ofer',  component:OfferlistComponent, canActivate:[AuthGuard] },
      {  path:'hr',  component:HrlistComponent, canActivate:[AuthGuard] },
      {  path:'admin',  component:DashboardComponent, canActivate:[AuthGuard] },
    ]
  },
  {  path:'edit/:id',  component:VisitoreditComponent, canActivate:[AuthGuard] },
  {  path:'hredit/:id',  component:HreditComponent, canActivate:[AuthGuard] },
  {  path:'offeredit/:id',  component:HreditComponent, canActivate:[AuthGuard] },



  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: DashboardComponent,
  //       canActivate: [AuthGuard],
  //     }
  //   ]
  // },









  // { path:'admin', component:AdminComponent},
  // { path: '', pathMatch: 'full', redirectTo: '/admin' },
  // {
  //   path: 'dashboard',
  //   loadChildren: () =>
  //     import('./pages/dashboard/dashboard.module').then(
  //       (m) => m.DashboardModule
  //     ),
  // },
  // {
  //   path: 'empty-page',
  //   loadChildren: () =>
  //     import('./pages/emptyPage/emptyPage.module').then(
  //       (m) => m.EmptyPageModule
  //     ),
  // },
  // {
  //   path: 'settings',
  //   loadChildren: () =>
  //     import('./pages/emptyPage/emptyPage.module').then(
  //       (m) => m.EmptyPageModule
  //     ),
  // },
  // { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),],
  exports: [RouterModule],
})
export class AppRoutingModule {}
