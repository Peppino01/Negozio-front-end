import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/model/Login';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "mario.rossi@example.com"
  password: string = "password123"

  errorMessage: string = ""

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    let login: Login = new Login(this.email, this.password)
    
    this.authService.login(login).subscribe(
      (res: Object) => {
        this.errorMessage = ""
        this.router.navigateByUrl('/home')
      },
      (responseError: HttpErrorResponse) => {
        this.errorMessage = responseError.error
      }
    )
  }

  goToSignin(): void {
    this.router.navigateByUrl('/signin')
  }

}
