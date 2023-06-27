import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/model/Page';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dipendenti',
  templateUrl: './dipendenti.component.html',
  styleUrls: ['./dipendenti.component.scss']
})
export class DipendentiComponent implements OnInit {

  linkedPages: Page[] = [
    { title: 'Home', url: environment.pagesUrl.admin },
    { title: 'Gestione dipendenti', url: environment.pagesUrl.gestione_dipendenti },
    { title: 'Gestione prodotti', url: environment.pagesUrl.gestione_prodotti },
    { title: 'Registro', url: environment.pagesUrl.registro }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
