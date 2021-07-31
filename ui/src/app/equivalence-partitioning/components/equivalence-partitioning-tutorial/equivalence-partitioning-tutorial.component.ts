import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb';
import { ApiService } from 'src/app/shared/services/api.service';
import { MyErrorStateMatcher } from 'src/app/shared/utilities/error-state-matcher';
import { EquivalencePartitioningTutorial } from '../../models/equivalence-partitioning-tutorial';

@Component({
  selector: 'app-equivalence-partitioning-tutorial',
  templateUrl: './equivalence-partitioning-tutorial.component.html',
  styleUrls: ['./equivalence-partitioning-tutorial.component.scss']
})
export class EquivalencePartitioningTutorialComponent implements OnInit {
  breadcrumbs!: Breadcrumb[];
  equivalencePartitioningTutorial!: Observable<EquivalencePartitioningTutorial>;
  form!: FormGroup;
  matcher = new MyErrorStateMatcher();
  formIsReady = false;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.formIsReady = false;
      this.equivalencePartitioningTutorial = this.apiService.get<EquivalencePartitioningTutorial>(`https://qatrainingappcontent.blob.core.windows.net/content/equivalence-partitioning/${slug}.json`)
      .pipe(tap(t => {
        this.createBreadcrumbs(t.title, t.slug);
        this.form = this.fb.group({});
        let counter = 1;
        for (let control of t.formControls) {
          let formControl;
          if (control.validations.length > 0) {
            const validators = [];
            for (let validator of control.validations) {
              if (validator.errorType === 'required') {
                validators.push(Validators.required);
              }

              if (validator.errorType === 'minlength') {
                validators.push(Validators.minLength(+validator.config));
              }
            }

            formControl = new FormControl('', Validators.compose(validators));
          } else {
            formControl = new FormControl();
          }

          this.form.addControl(`control-${counter}`, formControl);

          counter++;
        }
        console.log('CHECK',this.form.controls['control-1'].value);
        this.formIsReady = true;
      }));
    });
  }

  createBreadcrumbs(title: string, slug: string) {
    this.breadcrumbs = new Array<Breadcrumb>();
    this.breadcrumbs.push(new Breadcrumb('Home', ''));
    this.breadcrumbs.push(new Breadcrumb('Functional testing', '/functional-testing'));
    this.breadcrumbs.push(new Breadcrumb('Equivalence partitioning', '/functional-testing/equivalence-partitioning'));
    this.breadcrumbs.push(new Breadcrumb(title, `/functional-testing/equivalence-partitioning/${slug}`, true));

  }

}
