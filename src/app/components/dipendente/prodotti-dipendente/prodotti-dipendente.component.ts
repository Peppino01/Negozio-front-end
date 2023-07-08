import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Page } from 'src/app/shared/model/Page';
import { InputProdotto } from 'src/app/shared/model/inputDTO/InputProdotto';
import { OutputInventario } from 'src/app/shared/model/outputDTO/OutputInventario';
import { AdminService } from 'src/app/shared/services/admin.service';
import { PublicApiService } from 'src/app/shared/services/public-api.service';
import { SaveProdottoDialog } from './save-prodotto';

@Component({
  selector: 'app-prodotti-dipendente',
  templateUrl: './prodotti-dipendente.component.html',
  styleUrls: ['./prodotti-dipendente.component.scss']
})
export class ProdottiDipendenteComponent implements OnInit {

  linkedPages: Page[] = [
    { title: 'Home', url: 'dipendente/home' },
    { title: 'Prodotti', url: 'dipendente/prodotti' },
    { title: 'Inventario', url: 'dipendente/inventario' },
    { title: 'Profilo', url: 'dipendente/profilo' },
    { title: 'Esci', url: 'login' }
  ];

  prodotti: InputProdotto[] = []
  prodottoSelezionato: InputProdotto | null = null

  // per aggiornare la tabella prodotti
  prodottoForm: FormGroup
  
  // per aggiornare la tabella inventario
  inventarioForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private publicAi: PublicApiService,
    private adminService: AdminService,
    private matSnackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.prodottoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      prezzo: ['', [Validators.required, Validators.min(0)]],
      descrizione: ['']
    })
    this.inventarioForm = this.formBuilder.group({
      disponibile: ['', Validators.required],
      non_disponibile: ['', Validators.required],
      in_promozione: ['', Validators.required],
      venduto: ['', Validators.required]
    })
  }

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

      // cambio i valori del form con quelli del nuovo prodotto selezionato
      this.inventarioForm.get('disponibile')?.setValue(this.prodottoSelezionato.inventario[0].quantita)
      this.inventarioForm.get('non_disponibile')?.setValue(this.prodottoSelezionato.inventario[1].quantita)
      this.inventarioForm.get('in_promozione')?.setValue(this.prodottoSelezionato.inventario[2].quantita)
      this.inventarioForm.get('venduto')?.setValue(this.prodottoSelezionato.inventario[3].quantita)

      // imposto i controls del form come non toccati e non modificati
      this.inventarioForm.markAsPristine();
      this.inventarioForm.markAsUntouched();
    }
  }

  // Verifica se almeno un campo è diverso da quelli già presenti nell'inventario
  isFormDirty(): boolean {
    for (const controlName in this.inventarioForm.controls) {
      if (this.inventarioForm.controls[controlName].dirty) {
        return true;
      }
    }
    return false;
  }

  salvaInventarioProdotto(): void {
    let outInventario: OutputInventario[] = []

    // creo la lista di inventari da mandare al backend a partire dall'inventario del prodotto selezionato con la quantità di inventarioForm
    this.prodottoSelezionato?.inventario.forEach(inventario => {
      outInventario.push(new OutputInventario(
        inventario.id,
        this.inventarioForm.get(inventario.stato.toString().toLowerCase())?.value,
        inventario.stato
      ))
    });

    this.adminService.updateInventarioProdotto(outInventario).subscribe(
      (res: string) => {
        this.matSnackBar.open("Inventario prodotto aggiornato correttamente", undefined, {duration: 2000, verticalPosition: 'top'})
        // imposto i controls del form come non toccati e non modificati
        this.inventarioForm.markAsPristine();
        this.inventarioForm.markAsUntouched();
      },
      (responseError) => {
        this.matSnackBar.open(responseError.error, undefined, {duration: 2000, verticalPosition: 'top'})
        console.log(responseError);
      }
    )
  }

  openSaveProdottoDialog(isNewProdotto: boolean): void {
    let newProdotto: InputProdotto | null
    if (isNewProdotto) {
      newProdotto = null
    } else {
      newProdotto = this.prodottoSelezionato
    }

    const dialogRef = this.dialog.open(SaveProdottoDialog, {
      width: '300px',
      data: newProdotto
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.matSnackBar.open("Prodotto aggiunto correttamente", undefined, {duration: 2000, verticalPosition: 'top'})
        window.location.reload()
      }
    });
  }

}
