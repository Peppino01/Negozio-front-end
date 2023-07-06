import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { OutputTransazione } from "src/app/shared/model/outputDTO/OutputTransazione";
import { AdminService } from "src/app/shared/services/admin.service";

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'newTransazioneDialog.html',
})
export class DialogOverviewExampleDialog {

    nuovaTransazioneForm: FormGroup

  
    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        private fb: FormBuilder,
        private matSnackBar: MatSnackBar,
        private adminService: AdminService
    ) {
        this.nuovaTransazioneForm = this.fb.group({
            data: ['', Validators.required],
            tipo: ['', [Validators.required]],
            prezzo: ['', [Validators.required]],
            info: ['']
        })
    }
  
    onNoClick(): void {
        this.dialogRef.close();
        location.reload()
    }

    saveProdotto(): void {
        let newTransazione: OutputTransazione = new OutputTransazione(
            this.nuovaTransazioneForm.get('data')?.value,
            this.nuovaTransazioneForm.get('tipo')?.value,
            this.nuovaTransazioneForm.get('prezzo')?.value,
            this.nuovaTransazioneForm.get('info')?.value,
            [] // una transazione custom non proviene dalla vendita di un prodotto, quindi non ha delle vendite associate
        )

        this.adminService.insertNewTransazione(newTransazione).subscribe(
            (res: string) => {
                console.log(res);
            },
            (responseError: HttpErrorResponse) => {
                console.log(responseError)
                this.matSnackBar.open(responseError.error.text, undefined, {duration: 2000, verticalPosition: 'top'})
                this.nuovaTransazioneForm.reset()
            }
        )
    }
  
}