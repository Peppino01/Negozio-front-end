import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OutputDipendente } from '../model/outputDTO/OutputDipendente';
import { OutputInventario } from '../model/outputDTO/OutputInventario';
import { OutputProdotto } from '../model/outputDTO/OutputProdotto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient
  ) { }

  addNewDipendente(newDipendente: OutputDipendente): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    const body = JSON.stringify(newDipendente)
    
    return this.http.post(environment.hostname + '/dipendenti/create', body, {headers})
  }

  getAllDipendenti(): Observable<any> {
    return this.http.get(environment.hostname + '/dipendenti/getAll')
  }

  updateInventarioProdotto(outputInventario: OutputInventario[]): Observable<any> {
    return this.http.put(environment.hostname + '/inventario/update', outputInventario)
  }

  saveProdotto(prodotto: OutputProdotto): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    const body = JSON.stringify(prodotto)
    
    return this.http.post(environment.hostname + '/prodotti/save', body, {headers})
  }

}
