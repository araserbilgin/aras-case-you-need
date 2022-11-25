import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataTableDirective } from 'angular-datatables';
import { AdsService } from './services/ads.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  httpClient: HttpClient;

  constructor(private readonly _adsService: AdsService) {}

  title = 'case-you-need';
  active = 'top';

  ngOnInit() {

  }
}
