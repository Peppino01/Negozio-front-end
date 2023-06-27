import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Dipendente } from 'src/app/shared/model/Dipendente';
import { Genere } from 'src/app/shared/model/Genere';
import { Page } from 'src/app/shared/model/Page';
import { AdminService } from 'src/app/shared/services/admin.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-dipendenti',
  templateUrl: './dipendenti.component.html',
  styleUrls: ['./dipendenti.component.scss']
})
export class DipendentiComponent implements OnInit {

  linkedPages: Page[] = [
    { title: 'Home', url: environment.pagesUrl.admin },
    { title: 'Gestione dipendenti', url: environment.pagesUrl.gestione_dipendenti },
    { title: 'Gestione prodotti', url: environment.pagesUrl.gestione_prodotti },
    { title: 'Registro', url: environment.pagesUrl.registro }
  ];

  errorMessage: string = ""

  generi: Genere[] = Object.values(Genere)

  newDipendenteForm: FormGroup

  dipendenti: Dipendente[] = []
  dettaglioDipendente: Dipendente | null = null

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) {
    this.newDipendenteForm = this.formBuilder.group({
      nome: ['Giuseppe', Validators.required],
      cognome: ['Grammatico'],
      email: ['g.grammatico@mail.com', [Validators.required, Validators.email]],
      password: ['12345678', [Validators.required, Validators.minLength(8)]],
      numTelefono: ['3471579668'],
      dataNascita: ['2001-07-31'],
      stipendio: ['1500', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.adminService.getAllDipendenti().subscribe(
      (res: Dipendente[]) => {
        // popolo dipendenti
        res.forEach(
          d => {
            this.dipendenti.push(new Dipendente(
              d.nome,
              d.cognome,
              d.email,
              d.password,
              d.numTelefono,
              d.dataNascita,
              d.stipendio,
              d.id
            ))
          }
        )
        this.errorMessage = ""
      },
      (responseError: HttpErrorResponse) => {
        console.log(responseError);
        this.errorMessage = responseError.error
      }
    )
  }

  signin(): void {
    let newDipendente: Dipendente = new Dipendente(
      this.newDipendenteForm.get('nome')?.value,
      this.newDipendenteForm.get('cognome')?.value,
      this.newDipendenteForm.get('email')?.value,
      this.newDipendenteForm.get('password')?.value,
      this.newDipendenteForm.get('numTelefono')?.value,
      this.newDipendenteForm.get('dataNascita')?.value,
      this.newDipendenteForm.get('stipendio')?.value
    )

    this.adminService.addNewDipendente(newDipendente).subscribe(
      (res: Object) => {
        console.log(res);
        this.errorMessage = ""
        location.reload()
      },
      (responseError: HttpErrorResponse) => {
        this.errorMessage = responseError.error
      }
    )
  }

  openDipendenteDettaglio(dipendente: Dipendente) {
    if(dipendente == this.dettaglioDipendente) {
      this.dettaglioDipendente = null
    } else if(dipendente) {
      this.dettaglioDipendente = dipendente
    }
  }

}
