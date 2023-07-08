import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/model/Page';

@Component({
  selector: 'app-profilo-cliente',
  templateUrl: './profilo-cliente.component.html',
  styleUrls: ['./profilo-cliente.component.scss']
})
export class ProfiloClienteComponent implements OnInit {

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
