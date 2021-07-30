import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquivalencePartitioningHomeComponent } from './components/equivalence-partitioning-home/equivalence-partitioning-home.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: '',
        component: EquivalencePartitioningHomeComponent
      }
      // {
      //   path: 'equivalence-partitioning',
      //   loadChildren: () => import('./../equivalence-partitioning/equivalence-partitioning.module')
      //   .then(m => m.EquivalencePartitioningModule)
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquivalencePartitioningRoutingModule { }
