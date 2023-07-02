import { Component, Inject, TemplateRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { InputProdotto } from "src/app/shared/model/inputDTO/InputProdotto";
import { OutputProdotto } from "src/app/shared/model/outputDTO/OutputProdotto";
import { AdminService } from "src/app/shared/services/admin.service";

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'save-prodotto.html',
})
export class SaveProdottoDialog {

  saveProdottoForm: FormGroup

  constructor(
    public dialogRef: MatDialogRef<SaveProdottoDialog>,
    @Inject(MAT_DIALOG_DATA) public prodotto: InputProdotto | null,
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) {
    this.saveProdottoForm = this.formBuilder.group({
      nome: [prodotto?.nome, Validators.required],
      prezzo: [prodotto?.prezzo, [Validators.required, Validators.min(0)]],
      descrizione: [prodotto?.descrizione]
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveProdotto(): void {
    let newProdotto: OutputProdotto = new OutputProdotto(
      this.saveProdottoForm.get("nome")?.value,
      this.saveProdottoForm.get("prezzo")?.value,
      this.saveProdottoForm.get("descrizione")?.value,
      [],
      [],
      []
    )

    this.adminService.saveProdotto(newProdotto).subscribe(
      (res: string) => {
        this.dialogRef.close(true);
      },
      (responseError) => {
        this.dialogRef.close(false);
      }
    )
  }

}