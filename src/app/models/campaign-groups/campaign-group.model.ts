import { CampaignBudgetDetail } from "../shared/campaign-budget-detail.model";
import { CampaignDeviceList } from "../shared/campaign-device-list.model";
import { NetworkSettings } from "../shared/network-settings.model";

export class CampaignGroup {
  resourceName: string;
  status: string;
  networkSettings: NetworkSettings;
  name: string;
  id: string;
  campaignBudget: string;
  startDate: Date;
  endDate: Date;
  campaignBudgetDetail: CampaignBudgetDetail
  campaignDeviceList: Array<CampaignDeviceList> = [];
}
