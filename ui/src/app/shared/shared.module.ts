import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  exports: [
    BreadcrumbComponent
  ]
})
export class SharedModule { }
