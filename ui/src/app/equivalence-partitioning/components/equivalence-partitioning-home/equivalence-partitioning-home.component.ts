import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb';
import { MyErrorStateMatcher } from 'src/app/shared/utilities/error-state-matcher';

@Component({
  selector: 'app-equivalence-partitioning-home',
  templateUrl: './equivalence-partitioning-home.component.html',
  styleUrls: ['./equivalence-partitioning-home.component.scss']
})
export class EquivalencePartitioningHomeComponent implements OnInit {

  breadcrumbs!: Breadcrumb[];
  example1Form!: FormGroup;
  exampleInput!: FormControl;
  matcher = new MyErrorStateMatcher();

  constructor(fb: FormBuilder) {
    this.breadcrumbs = new Array<Breadcrumb>();
    this.breadcrumbs.push(new Breadcrumb('Home', ''));
    this.breadcrumbs.push(new Breadcrumb('Functional testing', '/functional-testing'));
    this.breadcrumbs.push(new Breadcrumb('Equivalence partitioning', '/functional-testing/equivalence-partitioning', true));

    this.example1Form = fb.group({});
    this.exampleInput = new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10)]))
    this.example1Form.addControl('exampleInput', this.exampleInput);
  }

  ngOnInit() {

  }
}
