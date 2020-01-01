import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { ChangiPlantComponent } from './dashboards/plants/changi-plant/changi-plant.component';
import { BiopolisPlantComponent } from './dashboards/plants/biopolis-plant/biopolis-plant.component';
import { WoodlandsPlantComponent } from './dashboards/plants/woodlands-plant/woodlands-plant.component';
import { MediapolicPlantComponent } from './dashboards/plants/mediapolic-plant/mediapolic-plant.component';

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
    ChangiPlantComponent,
    BiopolisPlantComponent,
    WoodlandsPlantComponent,
    MediapolicPlantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    MatButtonModule
  ],
  providers: [
    SideMenuItemsService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
