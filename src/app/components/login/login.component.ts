import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ruolo } from 'src/app/shared/model/Ruolo';
import { InputLogin } from 'src/app/shared/model/inputDTO/InputLogin';
import { OutputLogin } from 'src/app/shared/model/outputDTO/OutputLogin';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage: string = ""

  loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['g.filippi@mail.com', [Validators.required, Validators.email]],
      password: ['01928374', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    let outputLogin: OutputLogin = new OutputLogin(this.loginForm.get("email")?.value, this.loginForm.get("password")?.value)
    
    this.authService.login(outputLogin).subscribe(
      (res: InputLogin) => {
        switch (res.ruolo) {
          case Ruolo.CLIENTE:
            this.router.navigateByUrl('/cliente/home')
            break;

          case Ruolo.DIPENDENTE:
            this.router.navigateByUrl('/dipendente/home')
            break;

          case Ruolo.PROPRIETARIO:
            this.router.navigateByUrl('/admin/home')
            break;
        
          default:
            this.errorMessage = "Errore durante l'assegnazione del ruolo, ruolo sconosciuto"
            break;
        }
      },
      (responseError: HttpErrorResponse) => {
        console.log(responseError);

        switch (responseError.status) {
          case 400:
            this.errorMessage = "Email o password errate"
            break;

          case 500:
            this.errorMessage = "Errore interno al server"
            break;
        
          default:
            break;
        }
      }
    )
  }

  goToSignin(): void {
    this.router.navigateByUrl('/signin')
  }

}
