import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResolvedReimbursementsComponent } from './view-resolved-reimbursements.component';

describe('ViewResolvedReimbursementsComponent', () => {
  let component: ViewResolvedReimbursementsComponent;
  let fixture: ComponentFixture<ViewResolvedReimbursementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewResolvedReimbursementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResolvedReimbursementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
