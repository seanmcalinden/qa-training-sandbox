import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb';

@Component({
  selector: 'app-equivalence-partitioning-home',
  templateUrl: './equivalence-partitioning-home.component.html',
  styleUrls: ['./equivalence-partitioning-home.component.scss']
})
export class EquivalencePartitioningHomeComponent implements OnInit {

  breadcrumbs!: Breadcrumb[];

  constructor() {
    this.breadcrumbs = new Array<Breadcrumb>();
    this.breadcrumbs.push(new Breadcrumb('Home', ''));
    this.breadcrumbs.push(new Breadcrumb('Functional testing', '/functional-testing'));
    this.breadcrumbs.push(new Breadcrumb('Equivalence partitioning', '/functional-testing/equivalence-partitioning', true));
  }

  ngOnInit() {

  }
}
