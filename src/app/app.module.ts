import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighchartsChartModule } from 'highcharts-angular';
import { DataTablesModule } from "angular-datatables";
import { TableModule } from 'primeng/table';
import { AdsService } from './services/ads.services';
import { CampaignGroupsService } from './services/campaign-group.services';
import { AccountOverviewComponent } from './components/account-overview/account-overview.component';
import { AllCampaignsComponent } from './components/all-campaigns/all-campaigns.component';
import { GroupsComponent } from './components/all-campaigns/groups/groups.component';
import { CampaignsComponent } from './components/all-campaigns/campaigns/campaigns.component';
import { AdsComponent } from './components/all-campaigns/ads/ads.component';
import { CampaignsService } from './services/campaigns.service';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DataService } from './services/data.services';
import { EnvironmentService } from './services/environment/environment.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AccountOverviewComponent,
    AllCampaignsComponent,
    GroupsComponent,
    CampaignsComponent,
    AdsComponent,
    HeaderComponent,
    SideNavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    HighchartsChartModule,
    DataTablesModule,
    TableModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    DataService,
    EnvironmentService,
    AdsService,
    CampaignGroupsService,
    CampaignsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
