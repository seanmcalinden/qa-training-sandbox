import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquivalencePartitioningExampleOneComponent } from './equivalence-partitioning-example-one.component';

describe('EquivalencePartitioningExampleOneComponent', () => {
  let component: EquivalencePartitioningExampleOneComponent;
  let fixture: ComponentFixture<EquivalencePartitioningExampleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquivalencePartitioningExampleOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquivalencePartitioningExampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
