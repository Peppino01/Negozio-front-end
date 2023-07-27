import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/model/Page';
import { StatoProdotto } from 'src/app/shared/model/StatoProdotto';
import { InputProdottoInventario } from 'src/app/shared/model/inputDTO/InputProdottoInventario';
import { OutputProdottoCarrello } from 'src/app/shared/model/outputDTO/OutputProdottoCarrello';
import { PublicApiService } from 'src/app/shared/services/public-api.service';
import { UserService } from 'src/app/shared/services/user.service';

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
    { title: 'Carrello', url: 'cliente/carrello' },
    { title: 'Esci', url: 'login' }
  ];

  prodottiDisponibili: InputProdottoInventario[] = []
  prodottoSelezionato: InputProdottoInventario | null = null

  quantita: number = 1

  constructor(
    private publicAi: PublicApiService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.publicAi.getInventarioProdotti(StatoProdotto.DISPONIBILE).subscribe(
      (res: InputProdottoInventario[]) => {
        this.prodottiDisponibili = res
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

  aggiungiAlCarrello(): void {
    const prodottoCarrello: OutputProdottoCarrello = new OutputProdottoCarrello(this.prodottoSelezionato?.nome ? this.prodottoSelezionato.nome : '', this.quantita)
    this.userService.aggiungiAlCarrello(prodottoCarrello).subscribe(
      (res) => {
        console.log(res);
        
      }
    )
  }

  commenta(): void {
    
  }

}
