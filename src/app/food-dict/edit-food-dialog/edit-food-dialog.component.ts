import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Food } from '../../model/food';

@Component({
  selector: 'app-edit-food-dialog',
  templateUrl: './edit-food-dialog.component.html',
  styleUrls: ['./edit-food-dialog.component.css']
})
export class EditFoodDialogComponent implements OnInit {

  food: Food;

  constructor(
    public dialogRef: MatDialogRef<EditFoodDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Food) {}

  ngOnInit() {
    this.food = this.data;
  }

  onSubmit() {
    this.dialogRef.close(this.food);
  }
}
