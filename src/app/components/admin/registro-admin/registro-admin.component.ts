import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/model/Page';

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.scss']
})
export class RegistroAdminComponent implements OnInit {

  linkedPages: Page[] = [
    { title: 'Home', url: 'admin/home' },
    { title: 'Gestione dipendenti', url: 'admin/dipendenti' },
    { title: 'Gestione prodotti', url: 'admin/prodotti' },
    { title: 'Registro', url: 'admin/registro' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
