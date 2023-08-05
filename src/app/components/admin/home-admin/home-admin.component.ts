import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/model/Page';
import { InputInfoProprietario } from 'src/app/shared/model/inputDTO/InputInfoProprietario';
import { AdminService } from 'src/app/shared/services/admin.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {

  proprietarioInfo!: InputInfoProprietario

  linkedPages: Page[] = [
    { title: 'Home', url: 'admin/home' },
    { title: 'Gestione dipendenti', url: 'admin/dipendenti' },
    { title: 'Registro', url: 'admin/registro' },
    { title: 'Esci', url: 'login' }
  ];

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.getInfoProprietario().subscribe(
      (res: InputInfoProprietario) => {
        this.proprietarioInfo = res
      }
    )
  }

}
