import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb';
import { MyErrorStateMatcher } from 'src/app/shared/utilities/error-state-matcher';

@Component({
  selector: 'app-equivalence-partitioning-example-one',
  templateUrl: './equivalence-partitioning-example-one.component.html',
  styleUrls: ['./equivalence-partitioning-example-one.component.scss']
})
export class EquivalencePartitioningExampleOneComponent implements OnInit {
  breadcrumbs!: Breadcrumb[];
  form!: FormGroup;
  input1!: FormControl;
  matcher = new MyErrorStateMatcher();

  constructor(fb: FormBuilder) {
    this.breadcrumbs = new Array<Breadcrumb>();
    this.breadcrumbs.push(new Breadcrumb('Home', ''));
    this.breadcrumbs.push(new Breadcrumb('Functional testing', '/functional-testing'));
    this.breadcrumbs.push(new Breadcrumb('Equivalence partitioning', '/functional-testing/equivalence-partitioning'));
    this.breadcrumbs.push(new Breadcrumb('Example 1: Min length name', '/functional-testing/equivalence-partitioning/example-1', true));

    this.form = fb.group({});
    this.input1 = new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(5)]))
    this.form.addControl('exampleInput', this.input1);
   }

  ngOnInit(): void {
  }

}
