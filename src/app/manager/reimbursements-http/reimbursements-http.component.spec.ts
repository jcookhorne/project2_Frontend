import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementsHttpComponent } from './reimbursements-http.component';

describe('ReimbursementsHttpComponent', () => {
  let component: ReimbursementsHttpComponent;
  let fixture: ComponentFixture<ReimbursementsHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementsHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementsHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toContain(String);
  });
});
