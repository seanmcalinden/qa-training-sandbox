import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalTestingHomeComponent } from './functional-testing-home.component';

describe('FunctionalTestingHomeComponent', () => {
  let component: FunctionalTestingHomeComponent;
  let fixture: ComponentFixture<FunctionalTestingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalTestingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalTestingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
