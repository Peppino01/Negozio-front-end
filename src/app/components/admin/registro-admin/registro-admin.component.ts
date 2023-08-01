import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Page } from 'src/app/shared/model/Page';
import { InputTransazioneDetail } from 'src/app/shared/model/inputDTO/InputTransazioneDetail';
import { InputTransazioneSummary } from 'src/app/shared/model/inputDTO/InputTransazioneSummary';
import { AdminService } from 'src/app/shared/services/admin.service';
import { DialogOverviewExampleDialog } from './newTransazioneDialog';

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.scss']
})
export class RegistroAdminComponent implements OnInit {

  linkedPages: Page[] = [
    { title: 'Home', url: 'admin/home' },
    { title: 'Gestione dipendenti', url: 'admin/dipendenti' },
    { title: 'Registro', url: 'admin/registro' },
    { title: 'Esci', url: 'login' }
  ];

  transazioniSummary: InputTransazioneSummary[] = []
  transazioneSelezionata: InputTransazioneDetail | null = null

  constructor(
    private adminService: AdminService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.adminService.getTransazioniSummary().subscribe(
      (res: InputTransazioneSummary[]) => {
        this.transazioniSummary = res
      },
      (responseError: HttpErrorResponse) => {
        console.log(responseError)
      }
    )
  }

  selezionaTransazione(idTransazione: number): void {
    if(idTransazione == this.transazioneSelezionata?.id) {
      this.transazioneSelezionata = null
    } else {
      this.adminService.getTransazioneInfo(idTransazione).subscribe(
        (res: InputTransazioneDetail) => {
          this.transazioneSelezionata = res
          console.log(this.transazioneSelezionata)
        },
        (responseError: HttpErrorResponse) => {
          console.log(responseError)
        }
      )
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  //addNewTransazione(): void {
  //  this.adminService.insertNewTransazione().subscribe(
  //    
  //  )
  //}

}
