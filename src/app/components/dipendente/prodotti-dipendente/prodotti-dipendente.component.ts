import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Page } from 'src/app/shared/model/Page';
import { InputProdotto } from 'src/app/shared/model/inputDTO/InputProdotto';
import { PublicApiService } from 'src/app/shared/services/public-api.service';

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
    { title: 'Profilo', url: 'dipendente/profilo' }
  ];

  prodotti: InputProdotto[] = []
  prodottoSelezionato: InputProdotto | null = null

  // per aggiornare la tabella prodotti
  prodottoForm: FormGroup
  
  // per aggiornare la tabella inventario
  inventarioForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private publicAi: PublicApiService
  ) {
    this.prodottoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      prezzo: ['', [Validators.required, Validators.min(0)]],
      descrizione: ['']
    })
    this.inventarioForm = this.formBuilder.group({
      disponibile: ['', Validators.required],
      nonDisponibile: ['', Validators.required],
      inPromozione: ['', Validators.required],
      venduto: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.publicAi.getAllProdotti().subscribe(
      (res: InputProdotto[]) => {
        this.prodotti = res
        console.log(this.prodotti);
        
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
      this.inventarioForm.get('nonDisponibile')?.setValue(this.prodottoSelezionato.inventario[1].quantita)
      this.inventarioForm.get('inPromozione')?.setValue(this.prodottoSelezionato.inventario[2].quantita)
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
    
  }

}
