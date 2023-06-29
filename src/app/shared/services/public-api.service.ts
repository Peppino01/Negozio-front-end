import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StatoProdotto } from '../model/StatoProdotto';

@Injectable({
  providedIn: 'root'
})
export class PublicApiService {

  constructor(
    private http: HttpClient
  ) { }

    getAllProdotti(): Observable<any> {
      return this.http.get(environment.hostname + "/prodotti/getAll")
    }

    getProdottiInventarioDisponibili(statoProdotto: StatoProdotto | null): Observable<any> {
      if (statoProdotto != null) {
        let params = new HttpParams().set('stato', statoProdotto)
        return this.http.get(environment.hostname + "/prodotti/inventario", { params })
      } else {
        return this.http.get(environment.hostname + "/prodotti/inventario")
      }
    }

}
