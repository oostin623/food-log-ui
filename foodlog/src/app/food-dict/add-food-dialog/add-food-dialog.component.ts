import { Component, OnInit, Inject } from '@angular/core';
import { Food } from '../../model/food';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-food-dialog',
  templateUrl: './add-food-dialog.component.html',
  styleUrls: ['./add-food-dialog.component.css']
})
/**
 * Add Food Dialog
 *
 * Dialog containing a form for adding a new food to the food dict.
 */
export class AddFoodDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddFoodDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Food) {}

  ngOnInit() {
  }

  onSubmit(food: Food) {
    console.log('( food dialog ) - adding new food');
    this.dialogRef.close(food);
  }
}
