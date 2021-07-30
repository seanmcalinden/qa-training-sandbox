import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunctionalTestingHomeComponent } from './components/functional-testing-home/functional-testing-home.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: '',
        component: FunctionalTestingHomeComponent
      },
      {
        path: 'equivalence-partitioning',
        loadChildren: () => import('./../equivalence-partitioning/equivalence-partitioning.module')
        .then(m => m.EquivalencePartitioningModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionalTestingRoutingModule { }
