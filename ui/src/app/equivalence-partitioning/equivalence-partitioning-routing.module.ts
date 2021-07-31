import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquivalencePartitioningHomeComponent } from './components/equivalence-partitioning-home/equivalence-partitioning-home.component';
import { EquivalencePartitioningTutorialComponent } from './components/equivalence-partitioning-tutorial/equivalence-partitioning-tutorial.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: '',
        component: EquivalencePartitioningHomeComponent
      },
      {
        path: ':slug',
        component: EquivalencePartitioningTutorialComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquivalencePartitioningRoutingModule { }
