import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/model/Page';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.scss']
})
export class HomeClienteComponent implements OnInit {

  linkedPages: Page[] = [
    { title: 'Home', url: 'cliente/home' },
    { title: 'Prodotti', url: 'cliente/prodotti' },
    { title: 'Profilo', url: 'cliente/profilo' },
    { title: 'Carrello', url: 'cliente/carrello' },
    { title: 'Esci', url: 'login' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
