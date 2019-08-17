import { Component, Inject } from '@angular/core';
import { Food } from '../../model/food';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-food-dialog',
  templateUrl: './add-food-dialog.component.html',
  styleUrls: ['./add-food-dialog.component.css']
})
export class AddFoodDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddFoodDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Food
    ) {}

  onSubmit(food: Food) {
    this.dialogRef.close(food);
  }
}
