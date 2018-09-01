import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-food-dialog',
  template: `
   <h1 mat-dialog-title>Add Food</h1>
    <mat-dialog-content>
      todo: move food form here
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button>Add</button>
      <button mat-button>Cancel</button>
    </mat-dialog-actions>
    `,
  styleUrls: ['./add-food-dialog.component.css']
})
export class AddFoodDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
