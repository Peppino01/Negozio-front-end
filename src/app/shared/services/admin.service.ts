import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OutputDipendente } from '../model/outputDTO/OutputDipendente';
import { OutputInventario } from '../model/outputDTO/OutputInventario';
import { OutputProdotto } from '../model/outputDTO/OutputProdotto';
import { OutputTransazione } from '../model/outputDTO/OutputTransazione';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient
  ) { }

  getInfoProprietario(): Observable<any> {
    let params = new HttpParams().set('email', this.getEmailFromStorage())

    return this.http.get(environment.hostname + '/proprietario/info', { params: params })
  }

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

  getTransazioniSummary(): Observable<any> {
    return this.http.get(environment.hostname + '/transazioni/summary')
  }

  getTransazioneInfo(idTransazione: number): Observable<any> {
    const params = new HttpParams()
      .set('id', idTransazione.toString());

    return this.http.get(environment.hostname + '/transazioni/info', { params })
  }

  insertNewTransazione(transazione: OutputTransazione): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    const body = JSON.stringify(transazione)
    
    return this.http.post(environment.hostname + '/transazioni/insert', body, {headers})
  }


  // utility
  private getEmailFromStorage(): string {
    // Controllo prima nel session storage
    const emailInSessionStorage = sessionStorage.getItem('email');
    if (emailInSessionStorage) {
      return emailInSessionStorage;
    }

    // Se l'email non è nel session storage, controlla nel local storage
    const emailInLocalStorage = localStorage.getItem('email');
    if (emailInLocalStorage) {
      return emailInLocalStorage;
    }

    // Se l'email non è presente in entrambi gli storage, restituisci una stringa vuota
    return '';
  }

}
