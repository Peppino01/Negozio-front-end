import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/model/Page';
import { InputProdottoInventario } from 'src/app/shared/model/inputDTO/InputProdottoInventario';
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

  prodotti: InputProdottoInventario[] = []
  prodottoSelezionato: InputProdottoInventario | null = null

  constructor(
    private publicAi: PublicApiService
  ) { }

  ngOnInit(): void {
    this.publicAi.getProdottiInventarioDisponibili().subscribe(
      (res: InputProdottoInventario[]) => {
        this.prodotti = res
      },
      (responseError) => {
        console.log(responseError);
      }
    )
  }

  selezionaProdotto(prodotto: InputProdottoInventario): void {
    if(prodotto == this.prodottoSelezionato) {
      this.prodottoSelezionato = null
    } else if(prodotto) {
      this.prodottoSelezionato = prodotto
    }
  }

}
