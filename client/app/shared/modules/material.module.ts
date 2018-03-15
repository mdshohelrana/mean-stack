import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatToolbarModule, MatProgressSpinnerModule,
  MatCardModule, MatFormFieldModule, MatCheckboxModule, MatTableModule,
  MatDatepickerModule, MatInputModule, MatSelectModule, MatNativeDateModule,
  MatIconModule, MatSidenavModule
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
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule
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
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule
  ],
  declarations: []
})
export class MaterialModule { }
