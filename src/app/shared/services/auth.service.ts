import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../model/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(login: Login): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(login);
    
    return this.http.post(environment.hostname + '/login', body, {headers})
  }

  signin(newCliente: Cliente): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(newCliente);
    
    return this.http.post(environment.hostname + '/signin', body, {headers})
  }

}
