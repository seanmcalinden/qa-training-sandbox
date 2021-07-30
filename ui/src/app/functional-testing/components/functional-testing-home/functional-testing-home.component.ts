import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb';

@Component({
  selector: 'app-functional-testing-home',
  templateUrl: './functional-testing-home.component.html',
  styleUrls: ['./functional-testing-home.component.scss']
})
export class FunctionalTestingHomeComponent implements OnInit {

  breadcrumbs!: Breadcrumb[];

  constructor() {
    this.breadcrumbs = new Array<Breadcrumb>();
    this.breadcrumbs.push(new Breadcrumb('Home', ''));
    this.breadcrumbs.push(new Breadcrumb('Functional testing', '/functional-testing', true));
  }

  ngOnInit(): void {
  }

}
