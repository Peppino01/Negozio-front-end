import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/model/Page';
import { InputTransazioneSummary } from 'src/app/shared/model/inputDTO/InputTransazioneSummary';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.scss']
})
export class RegistroAdminComponent implements OnInit {

  linkedPages: Page[] = [
    { title: 'Home', url: 'admin/home' },
    { title: 'Gestione dipendenti', url: 'admin/dipendenti' },
    { title: 'Gestione prodotti', url: 'admin/prodotti' },
    { title: 'Registro', url: 'admin/registro' }
  ];

  transazioniSummary: InputTransazioneSummary[] = []

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.getTransazioniSummary().subscribe(
      (res: InputTransazioneSummary[]) => {
        this.transazioniSummary = res
        console.log(this.transazioniSummary)
      },
      (responseError: HttpErrorResponse) => {
        console.log(responseError)
      }
    )
  }

}
