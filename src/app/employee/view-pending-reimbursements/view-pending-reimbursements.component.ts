import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Reimbursement } from '../reimbursement.model';

@Component({
  selector: 'app-view-pending-reimbursements',
  templateUrl: './view-pending-reimbursements.component.html',
  styleUrls: ['./view-pending-reimbursements.component.css']
})
export class ViewPendingReimbursementsComponent implements OnInit {
 
  reim: Reimbursement={
    reimbursementId: 0,
	  employeeId: 0,
    reimbursementAmount: 0,
  	reimbursementReason:"",
  	reimbursementDate:"",
    state:"",
	  status:""
   }
  constructor(private employeeService:EmployeeService) { }
  allReimbursements: Reimbursement[] = [];
  ngOnInit(): void {
   
    this.employeeService.pendingReimbursements().subscribe((response)=>{
      this.allReimbursements = response;
    });
  }
}
