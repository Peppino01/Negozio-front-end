import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OutputProdottoCarrello } from '../model/outputDTO/OutputProdottoCarrello';
import { environment } from 'src/environments/environment';
import { OutputRecensione } from '../model/outputDTO/OutputRecensione';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }


  getInfoCliente(): Observable<any> {
    let params = new HttpParams().set('email', this.getEmailFromStorage())

    return this.http.get(environment.hostname + '/clienti/info', { params: params })
  }
  
  // carrello

  getCarrello(): Observable<any> {
    let params = new HttpParams().set('email', this.getEmailFromStorage())

    return this.http.get(environment.hostname + '/clienti/getCarrello', { params: params })
  }

  aggiungiAlCarrello(prodottoCarrello: OutputProdottoCarrello): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(prodottoCarrello);

    let params = new HttpParams().set('email', this.getEmailFromStorage())

    return this.http.post(
      environment.hostname + '/clienti/aggiungiAlCarrello',
      body,
      { headers: headers, params: params }
    )
  }

  compraCarrello(info: string, carrello: OutputProdottoCarrello[]): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(carrello);

    let params = new HttpParams()
      .set('email', this.getEmailFromStorage())
      .set('info', info)

    return this.http.patch(
      environment.hostname + '/clienti/compra',
      body,
      { headers: headers, params: params }
    )
  }


  // recensioni

  getRecensioni(nomeProdotto: string): Observable<any> {
    let params = new HttpParams().set('nomeProdotto', nomeProdotto)

    return this.http.get(environment.hostname + '/recensioni/getAllFromNomeProdotto', { params: params })
  }

  inserRecensione(recensione: OutputRecensione): Observable<any> {
    recensione.emailCliente = this.getEmailFromStorage()

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    const body = JSON.stringify(recensione)

    return this.http.post(
      environment.hostname + '/recensioni/insert',
      body,
      { headers: headers }
    )
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
