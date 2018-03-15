import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatToolbarModule, MatProgressSpinnerModule,
  MatCardModule, MatFormFieldModule, MatCheckboxModule, MatTableModule,
  MatDatepickerModule, MatInputModule, MatSelectModule, MatNativeDateModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTableModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTableModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule
  ],
  declarations: []
})
export class MaterialModule { }
