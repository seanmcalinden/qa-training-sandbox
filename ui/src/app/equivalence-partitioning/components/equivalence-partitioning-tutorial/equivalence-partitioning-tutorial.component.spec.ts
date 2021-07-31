import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquivalencePartitioningTutorialComponent } from './equivalence-partitioning-tutorial.component';

describe('EquivalencePartitioningTutorialComponent', () => {
  let component: EquivalencePartitioningTutorialComponent;
  let fixture: ComponentFixture<EquivalencePartitioningTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquivalencePartitioningTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquivalencePartitioningTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
