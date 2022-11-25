import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';
import { CampaignGroups } from '../models/campaign-groups/campaign-groups.model';

@Injectable()
export class CampaignGroupsService {

  constructor(private readonly _http: HttpClient) {}

  getCampaignGroups = (): Observable<CampaignGroups[]> => {
    return this._http.get('../assets/data/campaign-groups.json').pipe(map(res => res as CampaignGroups[]));
  };
}
