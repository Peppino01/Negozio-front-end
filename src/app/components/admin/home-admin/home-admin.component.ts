import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/model/Page';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {

  linkedPages: Page[] = [
    { title: 'Home', url: 'admin/home' },
    { title: 'Gestione dipendenti', url: 'admin/dipendenti' },
    { title: 'Gestione prodotti', url: 'admin/prodotti' },
    { title: 'Registro', url: 'admin/registro' },
    { title: 'Esci', url: 'login' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
