import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPendingReimbursementsComponent } from './view-pending-reimbursements.component';

describe('ViewPendingReimbursementsComponent', () => {
  let component: ViewPendingReimbursementsComponent;
  let fixture: ComponentFixture<ViewPendingReimbursementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewPendingReimbursementsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPendingReimbursementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
