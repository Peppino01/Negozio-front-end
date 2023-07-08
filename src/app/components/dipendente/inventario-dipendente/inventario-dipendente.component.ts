import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/model/Page';
import { StatoProdotto } from 'src/app/shared/model/StatoProdotto';
import { InputProdottoInventario } from 'src/app/shared/model/inputDTO/InputProdottoInventario';
import { PublicApiService } from 'src/app/shared/services/public-api.service';

@Component({
  selector: 'app-inventario-dipendente',
  templateUrl: './inventario-dipendente.component.html',
  styleUrls: ['./inventario-dipendente.component.scss']
})
export class InventarioDipendenteComponent implements OnInit {

  linkedPages: Page[] = [
    { title: 'Home', url: 'dipendente/home' },
    { title: 'Prodotti', url: 'dipendente/prodotti' },
    { title: 'Inventario', url: 'dipendente/inventario' },
    { title: 'Profilo', url: 'dipendente/profilo' },
    { title: 'Esci', url: 'login' }
  ];

  prodotti: InputProdottoInventario[] = []
  prodottoSelezionato: InputProdottoInventario | null = null

  constructor(
    private publicAi: PublicApiService
  ) { }

  ngOnInit(): void {
    this.publicAi.getProdottiInventarioDisponibili(StatoProdotto.DISPONIBILE).subscribe(
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
