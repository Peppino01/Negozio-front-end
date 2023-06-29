import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/model/Page';

@Component({
  selector: 'app-home-dipendente',
  templateUrl: './home-dipendente.component.html',
  styleUrls: ['./home-dipendente.component.scss']
})
export class HomeDipendenteComponent implements OnInit {

  linkedPages: Page[] = [
    { title: 'Home', url: 'dipendente/home' },
    { title: 'Prodotti', url: 'dipendente/prodotti' },
    { title: 'Profilo', url: 'dipendente/profilo' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
