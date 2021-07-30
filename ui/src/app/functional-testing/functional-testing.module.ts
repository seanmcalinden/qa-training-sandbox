import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunctionalTestingRoutingModule } from './functional-testing-routing.module';
import { FunctionalTestingHomeComponent } from './components/functional-testing-home/functional-testing-home.component';


@NgModule({
  declarations: [
    FunctionalTestingHomeComponent
  ],
  imports: [
    CommonModule,
    FunctionalTestingRoutingModule
  ]
})
export class FunctionalTestingModule { }
