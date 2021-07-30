import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunctionalTestingRoutingModule } from './functional-testing-routing.module';
import { FunctionalTestingHomeComponent } from './components/functional-testing-home/functional-testing-home.component';

import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FunctionalTestingHomeComponent,
  ],
  imports: [
    CommonModule,
    FunctionalTestingRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    SharedModule
  ]
})
export class FunctionalTestingModule { }
