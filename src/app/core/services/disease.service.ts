import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap, } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { TableRow } from 'src/app/shared/models/table.model';
import { environment } from 'src/environments/environment';
import { groupBy } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {
  // private readonly baseUrl = environment.serverUrl;
  private readonly continentCols: TableRow[] = [
    { header: 'SEMBOL', field: 'continent', type: 'text' },
    { header: 'YENİ ALIŞ', field: 'countries', type: 'text' },
    { header: 'YENİ SATIŞ', field: 'population', type: 'number' },
    { header: 'ESKİ ALIŞ', field: 'active', type: 'number' },
    { header: 'ESKİ SAYIŞ', field: 'activePerOneMillion', type: 'number', style: { 'min-width': '180px' } },
    { header: 'ZAMAN', field: 'cases', type: 'number' },
  ];
  private countryData: any[] = [];

  public get continentColumns() {
    return this.continentCols;
  }

  constructor(private http: HttpClient) { }

  // public all(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/covid-19/all`);
  // }

  // public continents(continent?: string): Observable<any[]> {
  //   const url = continent ? `${this.baseUrl}/covid-19/continents/${continent}?strict=true` : `${this.baseUrl}/covid-19/continents`;
  //   return this.http.get<any[]>(url);
  // }

  // public countries(byContinent: boolean = false): Observable<any | any[]> {
  //   return this.http.get<any>(`${this.baseUrl}/covid-19/countries`).pipe(
  //     map(data => {
  //       return byContinent ? groupBy(data, 'continent') : data
  //     })
  //   );
  // }

  // public vaccineCoverage(lastMonth: boolean = true): Observable<any[]> {
  //   const url = lastMonth ? `${this.baseUrl}/covid-19/vaccine/coverage?lastdays=30&fullData=true` :
  //     `${this.baseUrl}/covid-19/vaccine/coverage?lastdays=all&fullData=true`;
  //   return this.http.get<any[]>(url);
  // }
}
