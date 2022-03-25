import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestReimbursementComponent } from './request-reimbursement.component';

describe('RequestReimbursementComponent', () => {
  let component: RequestReimbursementComponent;
  let fixture: ComponentFixture<RequestReimbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestReimbursementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestReimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
// 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should request a reimbursement', ()=>{

    const compiled  = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.reimAmount')?.textContent).toContain(Number);
    expect(compiled.querySelector('.reimReason')?.textContent).toContain(String);
  });
});
