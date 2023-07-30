import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Page } from 'src/app/shared/model/Page';
import { StatoProdotto } from 'src/app/shared/model/StatoProdotto';
import { InputProdotto } from 'src/app/shared/model/inputDTO/InputProdotto';
import { InputProdottoInventario } from 'src/app/shared/model/inputDTO/InputProdottoInventario';
import { InputRecensione } from 'src/app/shared/model/inputDTO/InputRecensione';
import { OutputProdottoCarrello } from 'src/app/shared/model/outputDTO/OutputProdottoCarrello';
import { PublicApiService } from 'src/app/shared/services/public-api.service';
import { UserService } from 'src/app/shared/services/user.service';
import { InsertRecensioneDialog } from './insert-recensione';

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

  recensioni: InputRecensione[] = []

  stars = [1, 2, 3, 4, 5]

  quantita: number = 1

  constructor(
    private publicAi: PublicApiService,
    private userService: UserService,
    public dialog: MatDialog
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

  caricaCommenti(nomeProdotto: string): void {
    this.userService.getRecensioni(nomeProdotto).subscribe(
      (res: InputRecensione[]) => {
        console.log(res);
        this.recensioni = res
      }
    )
  }

  selezionaProdotto(prodotto: InputProdottoInventario): void {
    if(prodotto == this.prodottoSelezionato) {
      this.recensioni = []
      this.prodottoSelezionato = null
    } else if(prodotto) {
      this.caricaCommenti(prodotto.nome)
      this.prodottoSelezionato = prodotto
      this.quantita = 1
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
  openInsertRecensioneDialog(): void {

    const dialogRef = this.dialog.open(InsertRecensioneDialog, {
      width: '320px',
      data: this.prodottoSelezionato?.nome
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //this.matSnackBar.open("Prodotto aggiunto correttamente", undefined, {duration: 2000, verticalPosition: 'top'})
        if (this.prodottoSelezionato != null) {
          this.caricaCommenti(this.prodottoSelezionato.nome)
        }
      }
    });
  }




  // Metodo per estrarre la data nel formato (yyyy-mm-dd)
  extractDateFromDateStr(dateStr: string): string {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = this.formatWithLeadingZero(date.getMonth() + 1);
    const day = this.formatWithLeadingZero(date.getDate());
    return `${year}-${month}-${day}`;
  }

  // Metodo per formattare il numero aggiungendo uno zero iniziale se necessario
  formatWithLeadingZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

}


