import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/model/Page';
import { InputProdottoCarrello } from 'src/app/shared/model/inputDTO/InputProdottoCarrello';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  linkedPages: Page[] = [
    { title: 'Home', url: 'cliente/home' },
    { title: 'Prodotti', url: 'cliente/prodotti' },
    { title: 'Profilo', url: 'cliente/profilo' },
    { title: 'Carrello', url: 'cliente/carrello' },
    { title: 'Esci', url: 'login' }
  ];

  carrello: InputProdottoCarrello[] = []

  prodottoSelezionato: InputProdottoCarrello | null = null

  prezzoTotale: number = 0

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getCarrello().subscribe(
      res => {
        this.carrello = res
        this.prezzoTotale = this.calcolaPrezzoTotale()
        console.log(this.carrello);
      }
    )
  }

  selezionaProdotto(prodotto: InputProdottoCarrello): void {
    if(prodotto == this.prodottoSelezionato) {
      this.prodottoSelezionato = null
    } else if(prodotto) {
      this.prodottoSelezionato = prodotto
    }
  }

  calcolaPrezzoTotale(): number {
    let prezzoTotale = 0;
  
    for (const prodotto of this.carrello) {
      prezzoTotale += prodotto.prezzo * prodotto.quantita;
    }
  
    return prezzoTotale;
  }

  acquista(): void {
    this.userService.compraCarrello('acquisto prodotti', this.carrello).subscribe(
      (res) =>{
        console.log(res)
        location.reload()
      }
    )
  }

}
