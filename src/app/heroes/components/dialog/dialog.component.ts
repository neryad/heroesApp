import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  constructor(
    private dialoRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroes
  ) {}

  ngOnInit(): void {}
  borrar() {
    this.dialoRef.close(true);
  }
  cerrar() {
    this.dialoRef.close();
  }
}
