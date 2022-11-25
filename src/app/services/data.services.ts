import {
  HttpClient,
  HttpHeaders,
  HttpBackend,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { EnvironmentService } from './environment/environment.service';


const headers = {
  'Content-Type': 'application/json',
  'auth-req': 'true',
  'X-Requested-With': 'XMLHttpRequest',
};

const fileUploadHeaders = {
  'Content-Type': undefined,
};

@Injectable()
export class DataService {

  private _companyGuid: string = '';

  // This one is the one to use to by-pass the auth interceptor
  private _httpClient: HttpClient;

  constructor(
    private _handler: HttpBackend,
    private readonly _http: HttpClient,
    private readonly _environmentService: EnvironmentService,
  ) {

    this._httpClient = new HttpClient(this._handler);
  }

  get = (url: string): Observable<any> => {
    const urlToUse = this._environmentService.apiInfo.apiBaseUrl + url;
    return this._http.get(urlToUse, { headers: headers });
  };

  delete = (url: string): Observable<any> => {
    const urlToUse = this._environmentService.apiInfo.apiBaseUrl + url;
    return this._http.delete(urlToUse, { headers: headers });
  };

  getRelativePath = (url: string): Observable<any> => {
    const urlToUse = url;
    return this._http.get(urlToUse, { headers: headers });
  };
}
