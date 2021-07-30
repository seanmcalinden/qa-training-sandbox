import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquivalencePartitioningRoutingModule } from './equivalence-partitioning-routing.module';
import { EquivalencePartitioningHomeComponent } from './components/equivalence-partitioning-home/equivalence-partitioning-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EquivalencePartitioningHomeComponent
  ],
  imports: [
    CommonModule,
    EquivalencePartitioningRoutingModule,
    SharedModule
  ]
})
export class EquivalencePartitioningModule { }
