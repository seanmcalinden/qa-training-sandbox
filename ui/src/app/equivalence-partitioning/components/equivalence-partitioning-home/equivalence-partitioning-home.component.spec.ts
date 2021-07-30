import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquivalencePartitioningHomeComponent } from './equivalence-partitioning-home.component';

describe('EquivalencePartitioningHomeComponent', () => {
  let component: EquivalencePartitioningHomeComponent;
  let fixture: ComponentFixture<EquivalencePartitioningHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquivalencePartitioningHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquivalencePartitioningHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
