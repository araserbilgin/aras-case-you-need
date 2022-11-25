import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Campaigns } from 'src/app/models/campaigns/campaigns.model';
import { CampaignsService } from 'src/app/services/campaigns.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {

  campaignsList: Campaigns[];

  dtCampaignsTrigger: Subject<any> = new Subject<any>();

  dtCampaignsOptions: any = {
    pagingType: 'full_numbers',
    pageLength: 20,
    processing: true,
    lengthMenu: [20, 40, 100],
    responsive: true,
  };

  constructor(private readonly _campaignsService: CampaignsService) { }

  ngOnInit(): void {
    this.getAds();
  }
  getAds = () => {
    this._campaignsService.getCampaigns().subscribe((result: Campaigns[]) => {
      this.campaignsList = result
      this.dtCampaignsTrigger.next(void 0);
    });
  }
}
