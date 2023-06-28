import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OutputLogin } from '../model/outputDTO/OutputLogin';
import { InputLogin } from '../model/inputDTO/InputLogin';
import { OutputCliente } from '../model/outputDTO/OutputCliente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(login: OutputLogin): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(login);
    
    return this.http.post(environment.hostname + '/login', body, {headers})
  }

  signin(newCliente: OutputCliente): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(newCliente);
    
    return this.http.post(environment.hostname + '/signin', body, {headers})
  }

}
