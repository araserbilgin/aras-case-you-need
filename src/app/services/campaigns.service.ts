import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';
import { Campaigns } from '../models/campaigns/campaigns.model';

@Injectable()
export class CampaignsService {

  constructor(private readonly _http: HttpClient) {}

  getCampaigns = (): Observable<Campaigns[]> => {
    return this._http.get('../assets/data/campaigns.json').pipe(map(res => res as Campaigns[]));
  };
}
