import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/model/Page';

@Component({
  selector: 'app-prodotti-cliente',
  templateUrl: './prodotti-cliente.component.html',
  styleUrls: ['./prodotti-cliente.component.scss']
})
export class ProdottiClienteComponent implements OnInit {

  linkedPages: Page[] = [
    { title: 'Home', url: 'cliente/home' },
    { title: 'Prodotti', url: 'cliente/prodotti' },
    { title: 'Profilo', url: 'cliente/profilo' },
    { title: 'Esci', url: 'login' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
