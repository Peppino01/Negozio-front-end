import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/model/Page';
import { InputProdotto } from 'src/app/shared/model/inputDTO/InputProdotto';
import { PublicApiService } from 'src/app/shared/services/public-api.service';

@Component({
  selector: 'app-vetrina',
  templateUrl: './vetrina.component.html',
  styleUrls: ['./vetrina.component.scss']
})
export class VetrinaComponent implements OnInit {

  linkedPages: Page[] = [
    { title: 'Accedi', url: 'login' },
    { title: 'Registrati', url: 'signin' }
  ];

  prodotti: InputProdotto[] = []
  prodottoSelezionato: InputProdotto | null = null

  constructor(
    private publicAi: PublicApiService
  ) { }

  ngOnInit(): void {
    this.publicAi.getAllProdotti().subscribe(
      (res: InputProdotto[]) => {
        this.prodotti = res
      },
      (responseError) => {
        console.log(responseError);
      }
    )
  }

  selezionaProdotto(prodotto: InputProdotto): void {
    if(prodotto == this.prodottoSelezionato) {
      this.prodottoSelezionato = null
    } else if(prodotto) {
      this.prodottoSelezionato = prodotto
    }
  }

}
