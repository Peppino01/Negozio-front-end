import { Injectable } from '@angular/core';
import { Dipendente } from '../model/Dipendente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient
  ) { }

  addNewDipendente(newDipendente: Dipendente): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(newDipendente);
    
    return this.http.post(environment.hostname + '/admin/createDipendente', body, {headers})
  }

  getAllDipendenti(): Observable<any> {
    return this.http.get(environment.hostname + '/admin/allDipendenti')
  }

}
