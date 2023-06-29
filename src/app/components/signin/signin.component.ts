import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Genere } from 'src/app/shared/model/Genere';
import { OutputCliente } from 'src/app/shared/model/outputDTO/OutputCliente';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  errorMessage: string = ""

  generi: Genere[] = Object.values(Genere)

  signinForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.signinForm = this.formBuilder.group({
      nome: ['Giuseppe', Validators.required],
      cognome: ['Grammatico'],
      email: ['g.grammatico@mail.com', [Validators.required, Validators.email]],
      password: ['12345678', [Validators.required, Validators.minLength(8)]],
      numTelefono: ['3471579668'],
      dataNascita: ['2001-07-31'],
      genere: [Genere.MASCHIO]
    })
  }

  ngOnInit(): void {
  }

  signin(): void {
    let newUtente: OutputCliente = new OutputCliente(
      this.signinForm.get('nome')?.value,
      this.signinForm.get('cognome')?.value,
      this.signinForm.get('email')?.value,
      this.signinForm.get('password')?.value,
      this.signinForm.get('numTelefono')?.value,
      this.signinForm.get('dataNascita')?.value,
      this.signinForm.get('genere')?.value
    )

    this.authService.signin(newUtente).subscribe(
      (res: Object) => {
        this.errorMessage = ""
        this.router.navigateByUrl('/cliente/home')
      },
      (responseError: HttpErrorResponse) => {
        console.log(responseError);
        
        this.errorMessage = responseError.error
      }
    )
  }

  goToLogin(): void {
    this.router.navigateByUrl('/login')
  }

}
