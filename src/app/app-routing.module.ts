import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DcsDashboardComponent } from './dashboards/dcs-dashboard/dcs-dashboard.component';
import { RcmDashboardComponent } from './dashboards/rcm-dashboard/rcm-dashboard.component';
import { RcmBillingComponent } from './billing/rcm-billing/rcm-billing.component';
import { DcsBillingComponent } from './billing/dcs-billing/dcs-billing.component';
import { PlantDashboardComponent } from './dashboards/plant-dashboard/plant-dashboard.component';
import { OverallBillingComponent } from './billing/overall-billing/overall-billing.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'dcs-dashboard', pathMatch: 'full' },
  { path: 'dcs-dashboard', component: DcsDashboardComponent, data: { title: 'DCS Dashboard' } },
  { path: 'rcm-dashboard', component: RcmDashboardComponent, data: { title: 'RCM Dashboard' } },
  { path: 'rcm-billing', component: RcmBillingComponent, data: { title: 'RCM Billing' } },
  { path: 'dcs-billing', component: DcsBillingComponent, data: { title: 'DCS Billing' } },
  { path: 'plant-dashboard/:plantName', component: PlantDashboardComponent, data: { title: 'Plant Dashboard' } },
  { path: 'overall-billing', component: OverallBillingComponent, data: { title: 'Overall Dashboard' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'register', component: RegisterComponent, data: { title: 'Register' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
