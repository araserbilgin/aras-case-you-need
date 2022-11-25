import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Subject } from 'rxjs';
import { Ads } from 'src/app/models/ads/ads.model';
import { AdsService } from 'src/app/services/ads.services';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

  adsList: Ads[];
  globalFilterFields: string[] = [];
  @ViewChild(Table) dt: Table;
  dtTrigger: Subject<any> = new Subject<any>();
  adsSearchListColumns: { field: string; header: string; visible: boolean; sortable: boolean; }[];


  dtOptions: any = {
    pagingType: 'full_numbers',
    pageLength: 20,
    processing: true,
    lengthMenu: [20, 40, 100],
    responsive: true,
  };

  constructor(private readonly _adsService: AdsService) { }

  ngOnInit(): void {
    this.adsSearchListColumns = [

      { field: 'ad.ad.name', header: 'Name', visible: true, sortable: false },
      { field: 'ad.ad.startDate', header: 'Schedule', visible: true, sortable: true },
      { field: 'ad.ad.campaignBudgetDetail.campaignBudget.period', header: 'Budget', visible: true, sortable: true },
      { field: 'ad.ad.metrics.clicks', header: 'Clicks', visible: true, sortable: true },
      { field: 'ad.metrics.costPerConversion', header: 'CPC', visible: true, sortable: true },
      { field: 'ad.metrics.ctr', header: 'CTR', visible: true, sortable: true },
      { field: 'ad.metrics.conversions', header: 'CONV', visible: true, sortable: true },
      { field: 'ad.metrics.costMicros', header: 'Spend', visible: true, sortable: true },
    ];
    this.adsSearchListColumns.forEach(column => {
      this.globalFilterFields.push(column.field);
    });
    this.getAds();
  }
  getAds = () => {
    this._adsService.getAdsWithEnvironment().subscribe((result: Ads[]) => {
      this.adsList = result
      this.dtTrigger.next(void 0);
    });
  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
