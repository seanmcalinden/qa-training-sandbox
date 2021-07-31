import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquivalencePartitioningExampleOneComponent } from './components/equivalence-partitioning-example-one/equivalence-partitioning-example-one.component';
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
        path: 'example-1',
        component: EquivalencePartitioningExampleOneComponent
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
