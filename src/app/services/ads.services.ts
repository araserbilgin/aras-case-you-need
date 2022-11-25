import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Ads } from '../models/ads/ads.model';
import { map } from 'rxjs';
import { DataService } from './data.services';

@Injectable()
export class AdsService {

  constructor(private readonly _http: HttpClient,
              private readonly _dataService: DataService) {}

  getAds = (): Observable<Ads[]> => {
    return this._http.get('../assets/data/ads.json').pipe(map(res => res as Ads[]));
  };

  getAdsWithEnvironment = () => {
    const url = `../assets/data/ads.json`;
    return this._dataService.getRelativePath(url);
}
}
