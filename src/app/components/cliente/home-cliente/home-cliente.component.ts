import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/model/Page';
import { InputInfoCliente } from 'src/app/shared/model/inputDTO/InputInfoCliente';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.scss']
})
export class HomeClienteComponent implements OnInit {

  clienteInfo!: InputInfoCliente

  linkedPages: Page[] = [
    { title: 'Home', url: 'cliente/home' },
    { title: 'Prodotti', url: 'cliente/prodotti' },
    { title: 'Profilo', url: 'cliente/profilo' },
    { title: 'Carrello', url: 'cliente/carrello' },
    { title: 'Esci', url: 'login' }
  ];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getInfoCliente().subscribe(
      (res: InputInfoCliente) => {
        this.clienteInfo = res
      }
    )
  }

}
