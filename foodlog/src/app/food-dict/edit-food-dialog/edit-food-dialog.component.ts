import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Food } from '../../model/food';

@Component({
  selector: 'app-edit-food-dialog',
  templateUrl: './edit-food-dialog.component.html',
  styleUrls: ['./edit-food-dialog.component.css']
})
/**
 * Edit Food Dialog
 *
 * Dialog containing a form for editing an existing food
 */
export class EditFoodDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditFoodDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Food) {}

  ngOnInit() {
    console.log('( food dialog ) - now editing ', this.data.name);

  }

  onSubmit(food: Food) {
    this.dialogRef.close(food);
  }
}
