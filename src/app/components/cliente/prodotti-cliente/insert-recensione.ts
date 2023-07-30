import { Component, Inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { InputProdotto } from "src/app/shared/model/inputDTO/InputProdotto";
import { OutputProdotto } from "src/app/shared/model/outputDTO/OutputProdotto";
import { OutputRecensione } from "src/app/shared/model/outputDTO/OutputRecensione";
import { AdminService } from "src/app/shared/services/admin.service";
import { UserService } from "src/app/shared/services/user.service";

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'insert-recensione.html',
  styleUrls: ['./insert-recensione.scss']
})
export class InsertRecensioneDialog {

  insertRecensioneForm: FormGroup

  hoveredRating = 0; // Valutazione con il mouse sopra (inizialmente nessuna stella è colorata)
  stars = [1, 2, 3, 4, 5]; // Array per rappresentare le 5 stelle

  onStarClicked(star: number) {
    this.insertRecensioneForm.get('valutazione')?.setValue(star);
  }

  onStarHovered(star: number) {
    this.hoveredRating = star;
  }

  constructor(
    public dialogRef: MatDialogRef<InsertRecensioneDialog>,
    @Inject(MAT_DIALOG_DATA) public nomeProdotto: string,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.insertRecensioneForm = this.formBuilder.group({
      valutazione: [, Validators.required],
      commento: []
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendRecensione(): void {
    let newRecensione: OutputRecensione = new OutputRecensione(
      '',
      this.nomeProdotto,
      this.insertRecensioneForm.get("valutazione")?.value,
      this.insertRecensioneForm.get("commento")?.value
    )

    this.userService.inserRecensione(newRecensione).subscribe(
      (res: string) => {
        console.log(res);
        this.dialogRef.close(true);
      },
      (responseError) => {
        this.dialogRef.close(false);
      }
    )
  }

}