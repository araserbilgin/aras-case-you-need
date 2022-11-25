import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Subject } from 'rxjs/internal/Subject';
import { CampaignGroups } from 'src/app/models/campaign-groups/campaign-groups.model';
import { CampaignGroupsService } from 'src/app/services/campaign-group.services';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  globalFilterFields: string[] = [];
  @ViewChild(Table) dt: Table;
  dtTrigger: Subject<any> = new Subject<any>();
  groupsSearchListColumns: { field: string; header: string; visible: boolean; sortable: boolean; }[];
  campaignGroupsList: CampaignGroups[];


  constructor(private readonly _campaignGroupsService: CampaignGroupsService) { }

  ngOnInit(): void {
    this.groupsSearchListColumns = [

      { field: 'ad.ad.name', header: 'Name', visible: true, sortable: false },
      { field: 'ad.ad.startDate', header: 'Schedule', visible: true, sortable: true },
      { field: 'ad.ad.campaignBudgetDetail.campaignBudget.period', header: 'Budget', visible: true, sortable: true },
      { field: 'ad.ad.metrics.clicks', header: 'Clicks', visible: true, sortable: true },
      { field: 'ad.metrics.costPerConversion', header: 'CPC', visible: true, sortable: true },
      { field: 'ad.metrics.ctr', header: 'CTR', visible: true, sortable: true },
      { field: 'ad.metrics.conversions', header: 'CONV', visible: true, sortable: true },
      { field: 'ad.metrics.costMicros', header: 'Spend', visible: true, sortable: true },
    ];
    this.groupsSearchListColumns.forEach(column => {
      this.globalFilterFields.push(column.field);
    });
    this.getGroups();

  }
  getGroups = () => {
    this._campaignGroupsService.getCampaignGroups().subscribe((result: CampaignGroups[]) => {
      this.campaignGroupsList = result
    });
  }
}
