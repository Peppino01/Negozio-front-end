import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Page } from 'src/app/shared/model/Page';
import { InputDipendente } from 'src/app/shared/model/inputDTO/InputDipendente';
import { OutputDipendente } from 'src/app/shared/model/outputDTO/OutputDipendente';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-dipendenti-admin',
  templateUrl: './dipendenti-admin.component.html',
  styleUrls: ['./dipendenti-admin.component.scss']
})
export class DipendentiAdminComponent implements OnInit {

  linkedPages: Page[] = [
    { title: 'Home', url: 'admin/home' },
    { title: 'Gestione dipendenti', url: 'admin/dipendenti' },
    { title: 'Gestione prodotti', url: 'admin/prodotti' },
    { title: 'Registro', url: 'admin/registro' },
    { title: 'Esci', url: 'login' }
  ];

  errorMessage: string = ""

  newDipendenteForm: FormGroup

  dipendenti: InputDipendente[] = []
  dettaglioDipendente: InputDipendente | null = null

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
      (res: InputDipendente[]) => {
        // popolo dipendenti
        res.forEach(
          d => {
            this.dipendenti.push(new InputDipendente(
              d.id,
              d.nome,
              d.cognome,
              d.email,
              d.password,
              d.numTelefono,
              d.dataNascita,
              d.stipendio
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
    let newDipendente: OutputDipendente = new OutputDipendente(
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

  openDipendenteDettaglio(dipendente: InputDipendente) {
    if(dipendente == this.dettaglioDipendente) {
      this.dettaglioDipendente = null
    } else if(dipendente) {
      this.dettaglioDipendente = dipendente
    }
  }
}
