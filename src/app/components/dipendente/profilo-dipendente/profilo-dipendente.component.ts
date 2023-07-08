import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/model/Page';

@Component({
  selector: 'app-profilo-dipendente',
  templateUrl: './profilo-dipendente.component.html',
  styleUrls: ['./profilo-dipendente.component.scss']
})
export class ProfiloDipendenteComponent implements OnInit {

  linkedPages: Page[] = [
    { title: 'Home', url: 'dipendente/home' },
    { title: 'Prodotti', url: 'dipendente/prodotti' },
    { title: 'Inventario', url: 'dipendente/inventario' },
    { title: 'Profilo', url: 'dipendente/profilo' },
    { title: 'Esci', url: 'login' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
