import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MatTableModule, MatMenuModule, MatProgressSpinnerModule } from '@angular/material';


import { SideMenuItemsService } from './services/side-menu-items.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './widget/side-bar/side-bar.component';
import { DcsDashboardComponent } from './dashboards/dcs-dashboard/dcs-dashboard.component';
import { RcmDashboardComponent } from './dashboards/rcm-dashboard/rcm-dashboard.component';
import { RcmBillingComponent } from './billing/rcm-billing/rcm-billing.component';
import { DcsBillingComponent } from './billing/dcs-billing/dcs-billing.component';
import { PlantDashboardComponent } from './dashboards/plant-dashboard/plant-dashboard.component';
import { OverallBillingComponent } from './billing/overall-billing/overall-billing.component';
import { Barchart3dComponent } from './widget/barchart3d/barchart3d.component';
import { Piechart3dComponent } from './widget/piechart3d/piechart3d.component';
import { Doughnut3dComponent } from './widget/doughnut3d/doughnut3d.component';
import { Bar3dComponent } from './widget/bar3d/bar3d.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';

import { FusionChartsModule } from 'angular-fusioncharts';


import * as FusionCharts from 'fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';




FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    DcsDashboardComponent,
    RcmDashboardComponent,
    RcmBillingComponent,
    DcsBillingComponent,
    PlantDashboardComponent,
    OverallBillingComponent,
    Barchart3dComponent,
    Piechart3dComponent,
    Doughnut3dComponent,
    Bar3dComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FusionChartsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  providers: [
    SideMenuItemsService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
