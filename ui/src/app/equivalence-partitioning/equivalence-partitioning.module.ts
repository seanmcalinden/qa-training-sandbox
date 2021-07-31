import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquivalencePartitioningRoutingModule } from './equivalence-partitioning-routing.module';
import { EquivalencePartitioningHomeComponent } from './components/equivalence-partitioning-home/equivalence-partitioning-home.component';
import { SharedModule } from '../shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { EquivalencePartitioningTutorialComponent } from './components/equivalence-partitioning-tutorial/equivalence-partitioning-tutorial.component';

@NgModule({
  declarations: [
    EquivalencePartitioningHomeComponent,
    EquivalencePartitioningTutorialComponent
  ],
  imports: [
    CommonModule,
    EquivalencePartitioningRoutingModule,
    FlexLayoutModule,
    SharedModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EquivalencePartitioningModule { }
