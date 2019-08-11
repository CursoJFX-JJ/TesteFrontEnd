import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SelicServiceService {

  constructor(private http: HttpClient) { }

  AnoMesTaxaSelic(ano: string, mes?: string): Observable<any> {
    return this.http.get(`${environment.urlApi}/taxa/mensal`, {
      params: new HttpParams().append('ano', ano).set('mes', mes)
    });
  }

  calculoMediaAno(ano?: string): Observable<any> {
    return this.http.get(`${environment.urlApi}/taxa/anual`, {
      params: new HttpParams().append('ano', ano)
    });
  }

}
