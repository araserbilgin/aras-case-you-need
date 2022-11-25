import { CampaignDeviceList } from "../shared/campaign-device-list.model";
import { NetworkSettings } from "../shared/network-settings.model";
import { CampaignBudgetDetail } from "../shared/campaign-budget-detail.model";

export class Ad {
  resourceName: string;
  status: string;
  networkSettings: NetworkSettings;
  name: string;
  campaignId: string;
  id: string;
  campaignBudget: string;
  startDate: Date;
  endDate: Date;
  campaignBudgetDetail: CampaignBudgetDetail
  campaignDeviceList: Array<CampaignDeviceList> = [];
}
