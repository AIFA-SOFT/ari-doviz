import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorComponent } from './visitor.component';
import { RouterModule } from '@angular/router';
import { VisitoraddComponent } from '../visitoradd/visitoradd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: VisitorComponent,
      },
    ]),
  ],
  declarations: [],
})
export class VisitorModule {}
